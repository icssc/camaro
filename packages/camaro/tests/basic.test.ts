import { dirname } from 'path';
import { readFileSync } from 'node:fs'
import { test, describe, expect } from 'vitest'
import { transform } from '../src/js/index.js'
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

describe('basic test', () => {
  test('should match all nodes', async () => {
    const xml = readFileSync(`${__dirname}/ean.xml`, 'utf-8')
    const template = {
      cache_key: '/HotelListResponse/cacheKey',
      hotels: ['//HotelSummary', {
        hotel_id: 'hotelId',
        name: 'name',
        rooms: ['RoomRateDetailsList/RoomRateDetails', {
          rates: ['RateInfos/RateInfo', {
            currency: 'ChargeableRateInfo/@currencyCode',
            non_refundable: 'boolean(nonRefundable = "true")',
            price: 'number(ChargeableRateInfo/@total)'
          }],
          room_name: 'roomDescription',
          room_type_id: 'roomTypeCode'
        }]
      }],
      session_id: '/HotelListResponse/customerSessionId',
      path_not_exist: '/HotelListResponse/nonExistenPath',
      empty_array: []
    }

    const result = await transform(xml, template)

    expect(result.cache_key).toEqual('-48a4e19f:15bec159775:50eb')
    expect(result.session_id).toEqual('yuvb3jdpifp2t13y43pass2p')
    expect(result.path_not_exist).toEqual('')
    expect(result.empty_array).toEqual([])
    expect(Array.isArray(result.hotels)).toBeTruthy()

    result.hotels.forEach((h: any) => {
      expect(h.hotel_id).toBeTruthy()
      expect(h.name).toBeTruthy()
      expect(Array.isArray(h.rooms)).toBeTruthy()
      h.rooms.forEach((room: any) => {
        expect(room.room_name).toBeTruthy()
        expect(room.room_type_id).toBeTruthy()
      })
    })
  })
})
