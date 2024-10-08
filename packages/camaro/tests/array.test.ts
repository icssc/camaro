import { test, describe, expect } from 'vitest'
import { transform } from '../src/js/index.js'

const xml = `\
<recipe source="Modern Cookery for Private Families" xml:id="moco09596c01s001r002">
    <titleGroup>
        <title type="main"><span xml:id="page_8" />BOUILLON</title>
        <title type="subtitle">(<i>The Common Soup or Beef-Broth of France; cheap, and very wholesome</i>.)</title>
    </titleGroup>
    <p>
        <blockFixed type="graphic" xml:id="moco09596c01g002">
            <mediaResource alt="f0008-01" cms:chunk="yes" href="../graphics/f0008-01.jpg" pRights="yes" />
        </blockFixed>
    </p>
    <recipeProcedure>
        <p>This soup, or <i>broth</i> as we should perhaps designate it in England, is made once or twice in the week, in every family of respectability in France; and by the poorer classes as often as their means will enable them to substitute it for the vegetable or <i>maigre</i> soups, on which they are more commonly obliged to subsist. It is served usually on the first day with slices of untoasted bread soaked in it; on the second, it is generally varied with vermicelli, rice, or semoulina. The ingredients are, of course, often otherwise proportioned than as we have given them, and more or less meat is allowed according to the taste or circumstances of the persons for whom the <i>bouillon</i> is prepared; but the process of making it is always the same, and is thus described (rather learnedly) by one of the most skilful cooks in Europe: &#x201C;The stock-pot of the French artisan,&#x201D; says Monsieur Car&#x00EA;me, &#x201C;supplies his principal nourishment; and it is thus managed by his wife, who, without the slightest knowledge of chemistry, conducts the process in a truly scientific manner. She first lays the meat into an earthen stock-pot, and pours cold water to it in the proportion of about two quarts to three pounds of the beef;
            <link href="moco09596c01s001fn07">*</link> she then places it by the side of the fire, where it slowly becomes hot; and as it does so, the heat enlarges the fibre of the meat, dissolves the gelatinous substances which it contains, allows the albumen (or the muscular part which produces the scum) to disengage itself, and rise to the surface, and the
            <sc>OZMAZOME</sc> (<i>which is the most savoury part of the meat</i>) to be diffused through the broth. Thus, from the simple circumstance of boiling it in the gentlest manner, a relishing and nutritious soup will be obtained, and a dish of tender and palatable meat; but if the pot be placed and kept over a quick fire, the <i>albumen</i> will coagulate, harden the meat, prevent the water from penetrating it, and the <i>osmazome</i> from disengaging itself; the result will be a broth without flavour or goodness, and a tough, dry bit of meat.&#x201D;</p>
        <p>
            <note xml:id="moco09596c01s001fn07">
                <label>*</label>
                <p>This is a large proportion of meat for the family of a French artisan; a pound to the quart would be nearer the reality; but it is not the refuse-meat which would be purchased by persona of the same rank in England fox making broth.</p>
            </note>
        </p>
        <p>It must be observed in addition, that as the meat of which the <i>bouillon</i> is made, is almost invariably sent to table, a part of the rump, the mouse-buttock, or the leg-of-mutton piece of beef, should be selected for it; and the simmering should be continued only until this is perfectly tender. When the object is simply to make good, <span xml:id="page_9" />pure-flavoured, beef broth, part of the shin or leg, with a pound or two of the neck, will best answer the purpose. When the <i>bouilli</i> (that is to say, the beef which is boiled in the soup), is to be served, bind it into a good shape, add to it a calf&#x2019;s foot if easily procurable, as this much improves the quality of the <i>bouillon;</i> pour cold water to it in the proportion mentioned above, and proceed, as Monsieur Car&#x00EA;me directs, to heat the soup <i>slowly</i> by the side of the fire; remove carefully the head of scum which will gather on the surface before the boiling commences, and continue the skimming at intervals for about twenty minutes longer, pouring in once or twice a little cold water. Next, add salt in the proportion of two ounces to the gallon; this will cause a little more scum to rise; clear it quite off and throw in three or four turnips, as many carrots, half a head of celery, four or five young leeks, an onion stuck with six or eight cloves, a large half tea-spoonful of peppercorns, and a bunch of savoury herbs. Let the whole stew
            <sc>VERY</sc> softly without ceasing, from four hours and a half to six hours, according to the quantity : the beef in that time will be extremely tender but not overdone. It will be excellent eating if properly managed, and might often, we think, be substituted with great advantage for the hard, half-boiled, salted beef so often seen at an English table. It should be served with a couple of cabbages, which have been first boiled in the usual way, then pressed very dry, and stewed for ten minutes in a little of the broth, and seasoned with pepper and salt. The other vegetables from the <i>bouillon</i> may be laid round it or not at choice. The soup if served on the same day must be strained, well cleared from fat, and sent to table with fried or toasted bread, unless the continental mode of putting slices or crusts of <i>untoasted</i> bread into the tureen, and soaking them for ten minutes in a ladleful or two of the <i>bouillon</i>, be, from custom, preferred.</p>
    </recipeProcedure>
    <recipeIngredientsList units="metric">
        <list>
            <listItem>
                <ingredientphrase>
                    <ingredient>Beef</ingredient>
                </ingredientphrase>,
                <measure type="primary">
                    <quantity type="numeric">8 to 9</quantity>
                    <unit type="imperial">lbs.</unit>
                </measure>;</listItem>
            <listItem>
                <ingredientphrase>
                    <ingredient>water</ingredient>
                </ingredientphrase>,
                <measure type="primary">
                    <quantity type="numeric">6</quantity>
                    <unit type="metric">quarts</unit>
                </measure>;</listItem>
            <listItem>
                <ingredientphrase>
                    <ingredient>salt</ingredient>
                </ingredientphrase>,
                <measure type="primary">
                    <quantity type="numeric">3</quantity>
                    <unit type="imperial">oz.</unit>
                </measure>
                <ingredientphrase>
                    <descriptor>(more, if needed)</descriptor>
                </ingredientphrase>;</listItem>
            <listItem>
                <ingredientphrase>
                    <ingredient>carrots</ingredient>
                </ingredientphrase>,
                <measure type="primary">
                    <quantity type="numeric">4 to 6</quantity>
                </measure>;</listItem>
            <listItem>
                <ingredientphrase>
                    <ingredient>turnips</ingredient>
                </ingredientphrase>,
                <measure type="primary">
                    <quantity type="numeric">4 or 5</quantity>
                </measure>;</listItem>
            <listItem>
                <ingredientphrase>
                    <ingredient>celery</ingredient>
                </ingredientphrase>,
                <measure type="primary">
                    <quantity type="numeric">one small head</quantity>
                </measure>;</listItem>
            <listItem>
                <ingredientphrase>
                    <ingredient>leeks</ingredient>
                </ingredientphrase>,
                <measure type="primary">
                    <quantity type="numeric">4 to 6</quantity>
                </measure>;</listItem>
            <listItem>
                <ingredientphrase>
                    <ingredient>one onion</ingredient>
                </ingredientphrase>,
                <ingredientphrase>
                    <descriptor>stuck with 6 cloves</descriptor>
                </ingredientphrase>;</listItem>
            <listItem>
                <ingredientphrase>
                    <ingredient>peppercorns</ingredient>
                </ingredientphrase>,
                <measure type="primary">
                    <quantity type="numeric">one small teaspoonful</quantity>
                </measure>;</listItem>
            <listItem>
                <ingredientphrase>
                    <descriptor>large bunch of savoury herbs (calf&#x2019;s foot if convenient)</descriptor>
                </ingredientphrase>;</listItem>
        </list>
    </recipeIngredientsList>
    <recipeTime>to <i>simmer</i> 5 to 6 hours.</recipeTime>
    <recipeProcedure>
        <p><i>Obs.</i> 1.&#x2014;This broth forms in France the foundation of all richer soups and gravies. Poured on fresh meat (a portion of which should be veal) instead of water, it makes at once an excellent <i>consomm&#x00E9;</i> or strong jellied stock. If properly managed, it is very clear and pale; and with an additional weight of beef and some spoonsful of glaze may easily be converted into an amber-coloured gravy-soup, suited to modern taste.</p>
        <p><i>Obs</i>. 2.&#x2014;It is a common practice abroad to boil poultry, pigeons, and even game, in the <i>pot-au-feu or</i> soup-pot.
            <link href="moco09596c01s001fn08">*</link> They should be properly trussed, stewed in the broth just long enough to render them tender, and served, when ready, with a <i>good</i> sauce. A small ham, if well soaked, washed exceedingly clean, and freed entirely from any <span xml:id="page_10" />rusty or blackened parts, laid with the beef when the water is first added to it, and boiled from three hours and a half to four hours in the <i>bouillon</i>, is very superior in flavour to those cooked in water only, and infinitely improves the soup, which cannot however so well be eaten until the following day, when all the fat can easily be taker from it: it would, of course, require no salt.</p>
        <p>
            <note xml:id="moco09596c01s001fn08">
                <label>*</label>
                <p>In wealthy families the soup is boiled in a metal soup-pot, called a <i>marmite</i>.</p>
            </note>
        </p>
    </recipeProcedure>
</recipe>
`

describe('array test', () => {
  test('should match all nodes', async () => {
    const recipeTemplate = {
      id: '/recipe/@xml:id',
      ingredients: [
        '//list/listItem',
        {
          quantity: 'measure/quantity',
          unit: 'measure/unit',
          descriptor: 'ingredientphrase/descriptor'
        }
      ]
    }

    const result = await transform(xml, recipeTemplate)

    expect(typeof result).toEqual('object')
    expect(result.id).toEqual('moco09596c01s001r002')
    expect(Array.isArray(result.ingredients)).toBeTruthy()
    expect(result.ingredients).toHaveLength(10)
  })
})
