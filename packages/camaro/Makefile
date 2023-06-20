NPM = pnpm

EMCC = emcc

TARGET = src/js/camaro.js

NODE_MODULES = node_modules

EXTERNAL = pugixml json fifo_map

EXTERNAL_NODE_MODULES = $(addprefix $(NODE_MODULES)/,$(EXTERNAL))

INCLUDE = ./node_modules/pugixml/src:./node_modules/json/single_include/nlohmann

OUT_DIR = dist

PUGIXML_SRC = node_modules/pugixml/src/pugixml.cpp

PUGIXML_OBJ = $(OUT_DIR)/pugixml.o

CAMARO_SRC = src/cpp/camaro.cpp

CAMARO_EXPORT = camaro

$(TARGET) : $(EXTERNAL_NODE_MODULES) $(PUGIXML_OBJ)
	emcc --bind \
		-O3 \
		-DNDEBUG \
		-s WASM=1 \
		--closure 1 \
		-s MODULARIZE=1 \
		-s ASSERTIONS=0 \
		-Wno-writable-strings \
		-s ALLOW_MEMORY_GROWTH=1 \
		-Wno-deprecated-register \
		-s 'EXPORT_ES6' \
		-s 'SINGLE_FILE=1' \
		-s 'MALLOC="emmalloc"' \
		-s 'EXPORT_NAME="$(CAMARO_EXPORT)"' \
		-o $(TARGET) \
		-I $(INCLUDE) \
		$(OUT_DIR)/*.o \
		$(CAMARO_SRC)

$(EXTERNAL_NODE_MODULES) : $(NODE_MODULES)
	$(NPM) run install

$(NODE_MODULES) :
	$(NPM) install

$(PUGIXML_OBJ): $(PUGIXML_SRC) $(OUT_DIR)
	$(EMCC) -O3 -I $(INCLUDE) -c $< -o $@

$(OUT_DIR):
	mkdir -p $@
