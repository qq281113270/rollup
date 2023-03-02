#!/usr/bin/env node

/*
  @license
	Rollup.js v3.18.0
	Wed, 01 Mar 2023 18:45:12 GMT - commit 25bdc129d21685b69a00ee55397d42ac6eff6449

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
"use strict";

// Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

// const process$1 = require('node:process');
// const rollup = require('../shared/rollup.js');
// const require$$2 = require('util');
// const path = require('path');
// const fs = require('fs');
// const fseventsImporter = require("../shared/fsevents-importer.js");
// const promises = require("node:fs/promises");
// const path = require("node:path");
// const loadConfigFile_js = require("../shared/loadConfigFile.js");
// require('tty');
// require('node:perf_hooks');
// require('node:crypto');
// require('node:events');
// require('node:url');

import rollup from "rollup/dist/shared/rollup.js";
import require$$2 from "util";
import fs from "fs";
import promises from "fs/promises";
import path  from "path";
// import mergeOptions from "rollup/dist/shared/mergeOptions.js";
import fseventsImporter from "rollup/dist/shared/fsevents-importer.js";
import loadConfigFile_js from "rollup/dist/shared/loadConfigFile.js";
import source from "source-map-support";
import "perf_hooks";
import "crypto";
import "events";
import "url";
import "tty";




// const process$1 = require('node:process');
// const rollup = require('../shared/rollup.js');
// const require$$2 = require('util');
// const path = require('path');
// const fs = require('fs');
// const fseventsImporter = require('../shared/fsevents-importer.js');
// const promises = require('node:fs/promises');
// const path = require('node:path');
// const loadConfigFile_js = require('../shared/loadConfigFile.js');
// require('tty');
// require('node:perf_hooks');
// require('node:crypto');
// require('node:events');
// require('node:url');



const process$1 = process;
const cf = process.env.cf;

const DEFAULT_CONFIG_BASE =  path.join(process.cwd(), cf);

// const DEFAULT_CONFIG_BASE = 'rollup.config';

const help =
  'rollup version __VERSION__\n=====================================\n\nUsage: rollup [options] <entry file>\n\nBasic options:\n\n-c, --config <filename>     Use this config file (if argument is used but value\n                              is unspecified, defaults to rollup.config.js)\n-d, --dir <dirname>         Directory for chunks (if absent, prints to stdout)\n-e, --external <ids>        Comma-separate list of module IDs to exclude\n-f, --format <format>       Type of output (amd, cjs, es, iife, umd, system)\n-g, --globals <pairs>       Comma-separate list of `moduleID:Global` pairs\n-h, --help                  Show this help message\n-i, --input <filename>      Input (alternative to <entry file>)\n-m, --sourcemap             Generate sourcemap (`-m inline` for inline map)\n-n, --name <name>           Name for UMD export\n-o, --file <output>         Single output file (if absent, prints to stdout)\n-p, --plugin <plugin>       Use the plugin specified (may be repeated)\n-v, --version               Show version number\n-w, --watch                 Watch files in bundle and rebuild on changes\n--amd.autoId                Generate the AMD ID based off the chunk name\n--amd.basePath <prefix>     Path to prepend to auto generated AMD ID\n--amd.define <name>         Function to use in place of `define`\n--amd.forceJsExtensionForImports Use `.js` extension in AMD imports\n--amd.id <id>               ID for AMD module (default is anonymous)\n--assetFileNames <pattern>  Name pattern for emitted assets\n--banner <text>             Code to insert at top of bundle (outside wrapper)\n--chunkFileNames <pattern>  Name pattern for emitted secondary chunks\n--compact                   Minify wrapper code\n--context <variable>        Specify top-level `this` value\n--no-dynamicImportInCjs     Write external dynamic CommonJS imports as require\n--entryFileNames <pattern>  Name pattern for emitted entry chunks\n--environment <values>      Settings passed to config file (see example)\n--no-esModule               Do not add __esModule property\n--exports <mode>            Specify export mode (auto, default, named, none)\n--extend                    Extend global variable defined by --name\n--no-externalImportAssertions Omit import assertions in "es" output\n--no-externalLiveBindings   Do not generate code to support live bindings\n--failAfterWarnings         Exit with an error if the build produced warnings\n--footer <text>             Code to insert at end of bundle (outside wrapper)\n--no-freeze                 Do not freeze namespace objects\n--generatedCode <preset>    Which code features to use (es5/es2015)\n--generatedCode.arrowFunctions Use arrow functions in generated code\n--generatedCode.constBindings Use "const" in generated code\n--generatedCode.objectShorthand Use shorthand properties in generated code\n--no-generatedCode.reservedNamesAsProps Always quote reserved names as props\n--generatedCode.symbols     Use symbols in generated code\n--no-hoistTransitiveImports Do not hoist transitive imports into entry chunks\n--no-indent                 Don\'t indent result\n--inlineDynamicImports      Create single bundle when using dynamic imports\n--no-interop                Do not include interop block\n--intro <text>              Code to insert at top of bundle (inside wrapper)\n--no-makeAbsoluteExternalsRelative Prevent normalization of external imports\n--maxParallelFileOps <value> How many files to read in parallel\n--minifyInternalExports     Force or disable minification of internal exports\n--noConflict                Generate a noConflict method for UMD globals\n--outro <text>              Code to insert at end of bundle (inside wrapper)\n--perf                      Display performance timings\n--no-preserveEntrySignatures Avoid facade chunks for entry points\n--preserveModules           Preserve module structure\n--preserveModulesRoot       Put preserved modules under this path at root level\n--preserveSymlinks          Do not follow symlinks when resolving files\n--no-sanitizeFileName       Do not replace invalid characters in file names\n--shimMissingExports        Create shim variables for missing exports\n--silent                    Don\'t print warnings\n--sourcemapBaseUrl <url>    Emit absolute sourcemap URLs with given base\n--sourcemapExcludeSources   Do not include source code in source maps\n--sourcemapFile <file>      Specify bundle position for source maps\n--stdin=ext                 Specify file extension used for stdin input\n--no-stdin                  Do not read "-" from stdin\n--no-strict                 Don\'t emit `"use strict";` in the generated modules\n--strictDeprecations        Throw errors for deprecated features\n--no-systemNullSetters      Do not replace empty SystemJS setters with `null`\n--no-treeshake              Disable tree-shaking optimisations\n--no-treeshake.annotations  Ignore pure call annotations\n--treeshake.correctVarValueBeforeDeclaration Deoptimize variables until declared\n--treeshake.manualPureFunctions <names> Manually declare functions as pure\n--no-treeshake.moduleSideEffects Assume modules have no side effects\n--no-treeshake.propertyReadSideEffects Ignore property access side effects\n--no-treeshake.tryCatchDeoptimization Do not turn off try-catch-tree-shaking\n--no-treeshake.unknownGlobalSideEffects Assume unknown globals do not throw\n--validate                  Validate output\n--waitForBundleInput        Wait for bundle input files\n--watch.buildDelay <number> Throttle watch rebuilds\n--no-watch.clearScreen      Do not clear the screen when rebuilding\n--watch.exclude <files>     Exclude files from being watched\n--watch.include <files>     Limit watching to specified files\n--watch.onBundleEnd <cmd>   Shell command to run on `"BUNDLE_END"` event\n--watch.onBundleStart <cmd> Shell command to run on `"BUNDLE_START"` event\n--watch.onEnd <cmd>         Shell command to run on `"END"` event\n--watch.onError <cmd>       Shell command to run on `"ERROR"` event\n--watch.onStart <cmd>       Shell command to run on `"START"` event\n--watch.skipWrite           Do not write files to disk when watching\n\nExamples:\n\n# use settings in config file\nrollup -c\n\n# in config file, process.env.INCLUDE_DEPS === \'true\'\n# and process.env.BUILD === \'production\'\nrollup -c --environment INCLUDE_DEPS,BUILD:production\n\n# create CommonJS bundle.js from src/main.js\nrollup --format=cjs --file=bundle.js -- src/main.js\n\n# create self-executing IIFE using `window.jQuery`\n# and `window._` as external globals\nrollup -f iife --globals jquery:jQuery,lodash:_ \\\n  -i src/app.js -o build/app.js -m build/app.js.map\n\nNotes:\n\n* When piping to stdout, only inline sourcemaps are permitted\n\nFor more information visit https://rollupjs.org\n';

/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */
function camelCase(str) {
  // Handle the case where an argument is provided as camel case, e.g., fooBar.
  // by ensuring that the string isn't already mixed case:
  const isCamelCase = str !== str.toLowerCase() && str !== str.toUpperCase();
  if (!isCamelCase) {
    str = str.toLowerCase();
  }
  if (str.indexOf("-") === -1 && str.indexOf("_") === -1) {
    return str;
  } else {
    let camelcase = "";
    let nextChrUpper = false;
    const leadingHyphens = str.match(/^-+/);
    for (
      let i = leadingHyphens ? leadingHyphens[0].length : 0;
      i < str.length;
      i++
    ) {
      let chr = str.charAt(i);
      if (nextChrUpper) {
        nextChrUpper = false;
        chr = chr.toUpperCase();
      }
      if (i !== 0 && (chr === "-" || chr === "_")) {
        nextChrUpper = true;
      } else if (chr !== "-" && chr !== "_") {
        camelcase += chr;
      }
    }
    return camelcase;
  }
}
function decamelize(str, joinString) {
  const lowercase = str.toLowerCase();
  joinString = joinString || "-";
  let notCamelcase = "";
  for (let i = 0; i < str.length; i++) {
    const chrLower = lowercase.charAt(i);
    const chrString = str.charAt(i);
    if (chrLower !== chrString && i > 0) {
      notCamelcase += `${joinString}${lowercase.charAt(i)}`;
    } else {
      notCamelcase += chrString;
    }
  }
  return notCamelcase;
}
function looksLikeNumber(x) {
  if (x === null || x === undefined) return false;
  // if loaded from config, may already be a number.
  if (typeof x === "number") return true;
  // hexadecimal.
  if (/^0x[0-9a-f]+$/i.test(x)) return true;
  // don't treat 0123 as a number; as it drops the leading '0'.
  if (/^0[^.]/.test(x)) return false;
  return /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
}

/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */
// take an un-split argv string and tokenize it.
function tokenizeArgString(argString) {
  if (Array.isArray(argString)) {
    return argString.map((e) => (typeof e !== "string" ? e + "" : e));
  }
  argString = argString.trim();
  let i = 0;
  let prevC = null;
  let c = null;
  let opening = null;
  const args = [];
  for (let ii = 0; ii < argString.length; ii++) {
    prevC = c;
    c = argString.charAt(ii);
    // split on spaces unless we're in quotes.
    if (c === " " && !opening) {
      if (!(prevC === " ")) {
        i++;
      }
      continue;
    }
    // don't split the string if we're in matching
    // opening or closing single and double quotes.
    if (c === opening) {
      opening = null;
    } else if ((c === "'" || c === '"') && !opening) {
      opening = c;
    }
    if (!args[i]) args[i] = "";
    args[i] += c;
  }
  return args;
}

/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */
var DefaultValuesForTypeKey;
(function (DefaultValuesForTypeKey) {
  DefaultValuesForTypeKey["BOOLEAN"] = "boolean";
  DefaultValuesForTypeKey["STRING"] = "string";
  DefaultValuesForTypeKey["NUMBER"] = "number";
  DefaultValuesForTypeKey["ARRAY"] = "array";
})(DefaultValuesForTypeKey || (DefaultValuesForTypeKey = {}));

/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */
let mixin;
class YargsParser {
  constructor(_mixin) {
    mixin = _mixin;
  }
  parse(argsInput, options) {
    const opts = Object.assign(
      {
        alias: undefined,
        array: undefined,
        boolean: undefined,
        config: undefined,
        configObjects: undefined,
        configuration: undefined,
        coerce: undefined,
        count: undefined,
        default: undefined,
        envPrefix: undefined,
        narg: undefined,
        normalize: undefined,
        string: undefined,
        number: undefined,
        __: undefined,
        key: undefined,
      },
      options
    );
    // allow a string argument to be passed in rather
    // than an argv array.
    const args = tokenizeArgString(argsInput);
    // tokenizeArgString adds extra quotes to args if argsInput is a string
    // only strip those extra quotes in processValue if argsInput is a string
    const inputIsString = typeof argsInput === "string";
    // aliases might have transitive relationships, normalize this.
    const aliases = combineAliases(
      Object.assign(Object.create(null), opts.alias)
    );
    const configuration = Object.assign(
      {
        "boolean-negation": true,
        "camel-case-expansion": true,
        "combine-arrays": false,
        "dot-notation": true,
        "duplicate-arguments-array": true,
        "flatten-duplicate-arrays": true,
        "greedy-arrays": true,
        "halt-at-non-option": false,
        "nargs-eats-options": false,
        "negation-prefix": "no-",
        "parse-numbers": true,
        "parse-positional-numbers": true,
        "populate--": false,
        "set-placeholder-key": false,
        "short-option-groups": true,
        "strip-aliased": false,
        "strip-dashed": false,
        "unknown-options-as-args": false,
      },
      opts.configuration
    );
    const defaults = Object.assign(Object.create(null), opts.default);
    const configObjects = opts.configObjects || [];
    const envPrefix = opts.envPrefix;
    const notFlagsOption = configuration["populate--"];
    const notFlagsArgv = notFlagsOption ? "--" : "_";
    const newAliases = Object.create(null);
    const defaulted = Object.create(null);
    // allow a i18n handler to be passed in, default to a fake one (util.format).
    const __ = opts.__ || mixin.format;
    const flags = {
      aliases: Object.create(null),
      arrays: Object.create(null),
      bools: Object.create(null),
      strings: Object.create(null),
      numbers: Object.create(null),
      counts: Object.create(null),
      normalize: Object.create(null),
      configs: Object.create(null),
      nargs: Object.create(null),
      coercions: Object.create(null),
      keys: [],
    };
    const negative = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/;
    const negatedBoolean = new RegExp(
      "^--" + configuration["negation-prefix"] + "(.+)"
    );
    []
      .concat(opts.array || [])
      .filter(Boolean)
      .forEach(function (opt) {
        const key = typeof opt === "object" ? opt.key : opt;
        // assign to flags[bools|strings|numbers]
        const assignment = Object.keys(opt)
          .map(function (key) {
            const arrayFlagKeys = {
              boolean: "bools",
              string: "strings",
              number: "numbers",
            };
            return arrayFlagKeys[key];
          })
          .filter(Boolean)
          .pop();
        // assign key to be coerced
        if (assignment) {
          flags[assignment][key] = true;
        }
        flags.arrays[key] = true;
        flags.keys.push(key);
      });
    []
      .concat(opts.boolean || [])
      .filter(Boolean)
      .forEach(function (key) {
        flags.bools[key] = true;
        flags.keys.push(key);
      });
    []
      .concat(opts.string || [])
      .filter(Boolean)
      .forEach(function (key) {
        flags.strings[key] = true;
        flags.keys.push(key);
      });
    []
      .concat(opts.number || [])
      .filter(Boolean)
      .forEach(function (key) {
        flags.numbers[key] = true;
        flags.keys.push(key);
      });
    []
      .concat(opts.count || [])
      .filter(Boolean)
      .forEach(function (key) {
        flags.counts[key] = true;
        flags.keys.push(key);
      });
    []
      .concat(opts.normalize || [])
      .filter(Boolean)
      .forEach(function (key) {
        flags.normalize[key] = true;
        flags.keys.push(key);
      });
    if (typeof opts.narg === "object") {
      Object.entries(opts.narg).forEach(([key, value]) => {
        if (typeof value === "number") {
          flags.nargs[key] = value;
          flags.keys.push(key);
        }
      });
    }
    if (typeof opts.coerce === "object") {
      Object.entries(opts.coerce).forEach(([key, value]) => {
        if (typeof value === "function") {
          flags.coercions[key] = value;
          flags.keys.push(key);
        }
      });
    }
    if (typeof opts.config !== "undefined") {
      if (Array.isArray(opts.config) || typeof opts.config === "string") {
        []
          .concat(opts.config)
          .filter(Boolean)
          .forEach(function (key) {
            flags.configs[key] = true;
          });
      } else if (typeof opts.config === "object") {
        Object.entries(opts.config).forEach(([key, value]) => {
          if (typeof value === "boolean" || typeof value === "function") {
            flags.configs[key] = value;
          }
        });
      }
    }
    // create a lookup table that takes into account all
    // combinations of aliases: {f: ['foo'], foo: ['f']}
    extendAliases(opts.key, aliases, opts.default, flags.arrays);
    // apply default values to all aliases.
    Object.keys(defaults).forEach(function (key) {
      (flags.aliases[key] || []).forEach(function (alias) {
        defaults[alias] = defaults[key];
      });
    });
    let error = null;
    checkConfiguration();
    let notFlags = [];
    const argv = Object.assign(Object.create(null), { _: [] });
    // TODO(bcoe): for the first pass at removing object prototype  we didn't
    // remove all prototypes from objects returned by this API, we might want
    // to gradually move towards doing so.
    const argvReturn = {};
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const truncatedArg = arg.replace(/^-{3,}/, "---");
      let broken;
      let key;
      let letters;
      let m;
      let next;
      let value;
      // any unknown option (except for end-of-options, "--")
      if (arg !== "--" && /^-/.test(arg) && isUnknownOptionAsArg(arg)) {
        pushPositional(arg);
        // ---, ---=, ----, etc,
      } else if (truncatedArg.match(/^---+(=|$)/)) {
        // options without key name are invalid.
        pushPositional(arg);
        continue;
        // -- separated by =
      } else if (
        arg.match(/^--.+=/) ||
        (!configuration["short-option-groups"] && arg.match(/^-.+=/))
      ) {
        // Using [\s\S] instead of . because js doesn't support the
        // 'dotall' regex modifier. See:
        // http://stackoverflow.com/a/1068308/13216
        m = arg.match(/^--?([^=]+)=([\s\S]*)$/);
        // arrays format = '--f=a b c'
        if (m !== null && Array.isArray(m) && m.length >= 3) {
          if (checkAllAliases(m[1], flags.arrays)) {
            i = eatArray(i, m[1], args, m[2]);
          } else if (checkAllAliases(m[1], flags.nargs) !== false) {
            // nargs format = '--f=monkey washing cat'
            i = eatNargs(i, m[1], args, m[2]);
          } else {
            setArg(m[1], m[2], true);
          }
        }
      } else if (
        arg.match(negatedBoolean) &&
        configuration["boolean-negation"]
      ) {
        m = arg.match(negatedBoolean);
        if (m !== null && Array.isArray(m) && m.length >= 2) {
          key = m[1];
          setArg(key, checkAllAliases(key, flags.arrays) ? [false] : false);
        }
        // -- separated by space.
      } else if (
        arg.match(/^--.+/) ||
        (!configuration["short-option-groups"] && arg.match(/^-[^-]+/))
      ) {
        m = arg.match(/^--?(.+)/);
        if (m !== null && Array.isArray(m) && m.length >= 2) {
          key = m[1];
          if (checkAllAliases(key, flags.arrays)) {
            // array format = '--foo a b c'
            i = eatArray(i, key, args);
          } else if (checkAllAliases(key, flags.nargs) !== false) {
            // nargs format = '--foo a b c'
            // should be truthy even if: flags.nargs[key] === 0
            i = eatNargs(i, key, args);
          } else {
            next = args[i + 1];
            if (
              next !== undefined &&
              (!next.match(/^-/) || next.match(negative)) &&
              !checkAllAliases(key, flags.bools) &&
              !checkAllAliases(key, flags.counts)
            ) {
              setArg(key, next);
              i++;
            } else if (/^(true|false)$/.test(next)) {
              setArg(key, next);
              i++;
            } else {
              setArg(key, defaultValue(key));
            }
          }
        }
        // dot-notation flag separated by '='.
      } else if (arg.match(/^-.\..+=/)) {
        m = arg.match(/^-([^=]+)=([\s\S]*)$/);
        if (m !== null && Array.isArray(m) && m.length >= 3) {
          setArg(m[1], m[2]);
        }
        // dot-notation flag separated by space.
      } else if (arg.match(/^-.\..+/) && !arg.match(negative)) {
        next = args[i + 1];
        m = arg.match(/^-(.\..+)/);
        if (m !== null && Array.isArray(m) && m.length >= 2) {
          key = m[1];
          if (
            next !== undefined &&
            !next.match(/^-/) &&
            !checkAllAliases(key, flags.bools) &&
            !checkAllAliases(key, flags.counts)
          ) {
            setArg(key, next);
            i++;
          } else {
            setArg(key, defaultValue(key));
          }
        }
      } else if (arg.match(/^-[^-]+/) && !arg.match(negative)) {
        letters = arg.slice(1, -1).split("");
        broken = false;
        for (let j = 0; j < letters.length; j++) {
          next = arg.slice(j + 2);
          if (letters[j + 1] && letters[j + 1] === "=") {
            value = arg.slice(j + 3);
            key = letters[j];
            if (checkAllAliases(key, flags.arrays)) {
              // array format = '-f=a b c'
              i = eatArray(i, key, args, value);
            } else if (checkAllAliases(key, flags.nargs) !== false) {
              // nargs format = '-f=monkey washing cat'
              i = eatNargs(i, key, args, value);
            } else {
              setArg(key, value);
            }
            broken = true;
            break;
          }
          if (next === "-") {
            setArg(letters[j], next);
            continue;
          }
          // current letter is an alphabetic character and next value is a number
          if (
            /[A-Za-z]/.test(letters[j]) &&
            /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) &&
            checkAllAliases(next, flags.bools) === false
          ) {
            setArg(letters[j], next);
            broken = true;
            break;
          }
          if (letters[j + 1] && letters[j + 1].match(/\W/)) {
            setArg(letters[j], next);
            broken = true;
            break;
          } else {
            setArg(letters[j], defaultValue(letters[j]));
          }
        }
        key = arg.slice(-1)[0];
        if (!broken && key !== "-") {
          if (checkAllAliases(key, flags.arrays)) {
            // array format = '-f a b c'
            i = eatArray(i, key, args);
          } else if (checkAllAliases(key, flags.nargs) !== false) {
            // nargs format = '-f a b c'
            // should be truthy even if: flags.nargs[key] === 0
            i = eatNargs(i, key, args);
          } else {
            next = args[i + 1];
            if (
              next !== undefined &&
              (!/^(-|--)[^-]/.test(next) || next.match(negative)) &&
              !checkAllAliases(key, flags.bools) &&
              !checkAllAliases(key, flags.counts)
            ) {
              setArg(key, next);
              i++;
            } else if (/^(true|false)$/.test(next)) {
              setArg(key, next);
              i++;
            } else {
              setArg(key, defaultValue(key));
            }
          }
        }
      } else if (
        arg.match(/^-[0-9]$/) &&
        arg.match(negative) &&
        checkAllAliases(arg.slice(1), flags.bools)
      ) {
        // single-digit boolean alias, e.g: xargs -0
        key = arg.slice(1);
        setArg(key, defaultValue(key));
      } else if (arg === "--") {
        notFlags = args.slice(i + 1);
        break;
      } else if (configuration["halt-at-non-option"]) {
        notFlags = args.slice(i);
        break;
      } else {
        pushPositional(arg);
      }
    }
    // order of precedence:
    // 1. command line arg
    // 2. value from env var
    // 3. value from config file
    // 4. value from config objects
    // 5. configured default value
    applyEnvVars(argv, true); // special case: check env vars that point to config file
    applyEnvVars(argv, false);
    setConfig(argv);
    setConfigObjects();
    applyDefaultsAndAliases(argv, flags.aliases, defaults, true);
    applyCoercions(argv);
    if (configuration["set-placeholder-key"]) setPlaceholderKeys(argv);
    // for any counts either not in args or without an explicit default, set to 0
    Object.keys(flags.counts).forEach(function (key) {
      if (!hasKey(argv, key.split("."))) setArg(key, 0);
    });
    // '--' defaults to undefined.
    if (notFlagsOption && notFlags.length) argv[notFlagsArgv] = [];
    notFlags.forEach(function (key) {
      argv[notFlagsArgv].push(key);
    });
    if (
      configuration["camel-case-expansion"] &&
      configuration["strip-dashed"]
    ) {
      Object.keys(argv)
        .filter((key) => key !== "--" && key.includes("-"))
        .forEach((key) => {
          delete argv[key];
        });
    }
    if (configuration["strip-aliased"]) {
      []
        .concat(...Object.keys(aliases).map((k) => aliases[k]))
        .forEach((alias) => {
          if (configuration["camel-case-expansion"] && alias.includes("-")) {
            delete argv[
              alias
                .split(".")
                .map((prop) => camelCase(prop))
                .join(".")
            ];
          }
          delete argv[alias];
        });
    }
    // Push argument into positional array, applying numeric coercion:
    function pushPositional(arg) {
      const maybeCoercedNumber = maybeCoerceNumber("_", arg);
      if (
        typeof maybeCoercedNumber === "string" ||
        typeof maybeCoercedNumber === "number"
      ) {
        argv._.push(maybeCoercedNumber);
      }
    }
    // how many arguments should we consume, based
    // on the nargs option?
    function eatNargs(i, key, args, argAfterEqualSign) {
      let ii;
      let toEat = checkAllAliases(key, flags.nargs);
      // NaN has a special meaning for the array type, indicating that one or
      // more values are expected.
      toEat = typeof toEat !== "number" || isNaN(toEat) ? 1 : toEat;
      if (toEat === 0) {
        if (!isUndefined(argAfterEqualSign)) {
          error = Error(__("Argument unexpected for: %s", key));
        }
        setArg(key, defaultValue(key));
        return i;
      }
      let available = isUndefined(argAfterEqualSign) ? 0 : 1;
      if (configuration["nargs-eats-options"]) {
        // classic behavior, yargs eats positional and dash arguments.
        if (args.length - (i + 1) + available < toEat) {
          error = Error(__("Not enough arguments following: %s", key));
        }
        available = toEat;
      } else {
        // nargs will not consume flag arguments, e.g., -abc, --foo,
        // and terminates when one is observed.
        for (ii = i + 1; ii < args.length; ii++) {
          if (
            !args[ii].match(/^-[^0-9]/) ||
            args[ii].match(negative) ||
            isUnknownOptionAsArg(args[ii])
          )
            available++;
          else break;
        }
        if (available < toEat)
          error = Error(__("Not enough arguments following: %s", key));
      }
      let consumed = Math.min(available, toEat);
      if (!isUndefined(argAfterEqualSign) && consumed > 0) {
        setArg(key, argAfterEqualSign);
        consumed--;
      }
      for (ii = i + 1; ii < consumed + i + 1; ii++) {
        setArg(key, args[ii]);
      }
      return i + consumed;
    }
    // if an option is an array, eat all non-hyphenated arguments
    // following it... YUM!
    // e.g., --foo apple banana cat becomes ["apple", "banana", "cat"]
    function eatArray(i, key, args, argAfterEqualSign) {
      let argsToSet = [];
      let next = argAfterEqualSign || args[i + 1];
      // If both array and nargs are configured, enforce the nargs count:
      const nargsCount = checkAllAliases(key, flags.nargs);
      if (checkAllAliases(key, flags.bools) && !/^(true|false)$/.test(next)) {
        argsToSet.push(true);
      } else if (
        isUndefined(next) ||
        (isUndefined(argAfterEqualSign) &&
          /^-/.test(next) &&
          !negative.test(next) &&
          !isUnknownOptionAsArg(next))
      ) {
        // for keys without value ==> argsToSet remains an empty []
        // set user default value, if available
        if (defaults[key] !== undefined) {
          const defVal = defaults[key];
          argsToSet = Array.isArray(defVal) ? defVal : [defVal];
        }
      } else {
        // value in --option=value is eaten as is
        if (!isUndefined(argAfterEqualSign)) {
          argsToSet.push(processValue(key, argAfterEqualSign, true));
        }
        for (let ii = i + 1; ii < args.length; ii++) {
          if (
            (!configuration["greedy-arrays"] && argsToSet.length > 0) ||
            (nargsCount &&
              typeof nargsCount === "number" &&
              argsToSet.length >= nargsCount)
          )
            break;
          next = args[ii];
          if (
            /^-/.test(next) &&
            !negative.test(next) &&
            !isUnknownOptionAsArg(next)
          )
            break;
          i = ii;
          argsToSet.push(processValue(key, next, inputIsString));
        }
      }
      // If both array and nargs are configured, create an error if less than
      // nargs positionals were found. NaN has special meaning, indicating
      // that at least one value is required (more are okay).
      if (
        typeof nargsCount === "number" &&
        ((nargsCount && argsToSet.length < nargsCount) ||
          (isNaN(nargsCount) && argsToSet.length === 0))
      ) {
        error = Error(__("Not enough arguments following: %s", key));
      }
      setArg(key, argsToSet);
      return i;
    }
    function setArg(key, val, shouldStripQuotes = inputIsString) {
      if (/-/.test(key) && configuration["camel-case-expansion"]) {
        const alias = key
          .split(".")
          .map(function (prop) {
            return camelCase(prop);
          })
          .join(".");
        addNewAlias(key, alias);
      }
      const value = processValue(key, val, shouldStripQuotes);
      const splitKey = key.split(".");
      setKey(argv, splitKey, value);
      // handle populating aliases of the full key
      if (flags.aliases[key]) {
        flags.aliases[key].forEach(function (x) {
          const keyProperties = x.split(".");
          setKey(argv, keyProperties, value);
        });
      }
      // handle populating aliases of the first element of the dot-notation key
      if (splitKey.length > 1 && configuration["dot-notation"]) {
        (flags.aliases[splitKey[0]] || []).forEach(function (x) {
          let keyProperties = x.split(".");
          // expand alias with nested objects in key
          const a = [].concat(splitKey);
          a.shift(); // nuke the old key.
          keyProperties = keyProperties.concat(a);
          // populate alias only if is not already an alias of the full key
          // (already populated above)
          if (!(flags.aliases[key] || []).includes(keyProperties.join("."))) {
            setKey(argv, keyProperties, value);
          }
        });
      }
      // Set normalize getter and setter when key is in 'normalize' but isn't an array
      if (
        checkAllAliases(key, flags.normalize) &&
        !checkAllAliases(key, flags.arrays)
      ) {
        const keys = [key].concat(flags.aliases[key] || []);
        keys.forEach(function (key) {
          Object.defineProperty(argvReturn, key, {
            enumerable: true,
            get() {
              return val;
            },
            set(value) {
              val = typeof value === "string" ? mixin.normalize(value) : value;
            },
          });
        });
      }
    }
    function addNewAlias(key, alias) {
      if (!(flags.aliases[key] && flags.aliases[key].length)) {
        flags.aliases[key] = [alias];
        newAliases[alias] = true;
      }
      if (!(flags.aliases[alias] && flags.aliases[alias].length)) {
        addNewAlias(alias, key);
      }
    }
    function processValue(key, val, shouldStripQuotes) {
      // strings may be quoted, clean this up as we assign values.
      if (shouldStripQuotes) {
        val = stripQuotes(val);
      }
      // handle parsing boolean arguments --foo=true --bar false.
      if (
        checkAllAliases(key, flags.bools) ||
        checkAllAliases(key, flags.counts)
      ) {
        if (typeof val === "string") val = val === "true";
      }
      let value = Array.isArray(val)
        ? val.map(function (v) {
            return maybeCoerceNumber(key, v);
          })
        : maybeCoerceNumber(key, val);
      // increment a count given as arg (either no value or value parsed as boolean)
      if (
        checkAllAliases(key, flags.counts) &&
        (isUndefined(value) || typeof value === "boolean")
      ) {
        value = increment();
      }
      // Set normalized value when key is in 'normalize' and in 'arrays'
      if (
        checkAllAliases(key, flags.normalize) &&
        checkAllAliases(key, flags.arrays)
      ) {
        if (Array.isArray(val))
          value = val.map((val) => {
            return mixin.normalize(val);
          });
        else value = mixin.normalize(val);
      }
      return value;
    }
    function maybeCoerceNumber(key, value) {
      if (!configuration["parse-positional-numbers"] && key === "_")
        return value;
      if (
        !checkAllAliases(key, flags.strings) &&
        !checkAllAliases(key, flags.bools) &&
        !Array.isArray(value)
      ) {
        const shouldCoerceNumber =
          looksLikeNumber(value) &&
          configuration["parse-numbers"] &&
          Number.isSafeInteger(Math.floor(parseFloat(`${value}`)));
        if (
          shouldCoerceNumber ||
          (!isUndefined(value) && checkAllAliases(key, flags.numbers))
        ) {
          value = Number(value);
        }
      }
      return value;
    }
    // set args from config.json file, this should be
    // applied last so that defaults can be applied.
    function setConfig(argv) {
      const configLookup = Object.create(null);
      // expand defaults/aliases, in-case any happen to reference
      // the config.json file.
      applyDefaultsAndAliases(configLookup, flags.aliases, defaults);
      Object.keys(flags.configs).forEach(function (configKey) {
        const configPath = argv[configKey] || configLookup[configKey];
        if (configPath) {
          try {
            let config = null;
            const resolvedConfigPath = mixin.resolve(mixin.cwd(), configPath);
            const resolveConfig = flags.configs[configKey];
            if (typeof resolveConfig === "function") {
              try {
                config = resolveConfig(resolvedConfigPath);
              } catch (e) {
                config = e;
              }
              if (config instanceof Error) {
                error = config;
                return;
              }
            } else {
              config = mixin.require(resolvedConfigPath);
            }
            setConfigObject(config);
          } catch (ex) {
            // Deno will receive a PermissionDenied error if an attempt is
            // made to load config without the --allow-read flag:
            if (ex.name === "PermissionDenied") error = ex;
            else if (argv[configKey])
              error = Error(__("Invalid JSON config file: %s", configPath));
          }
        }
      });
    }
    // set args from config object.
    // it recursively checks nested objects.
    function setConfigObject(config, prev) {
      Object.keys(config).forEach(function (key) {
        const value = config[key];
        const fullKey = prev ? prev + "." + key : key;
        // if the value is an inner object and we have dot-notation
        // enabled, treat inner objects in config the same as
        // heavily nested dot notations (foo.bar.apple).
        if (
          typeof value === "object" &&
          value !== null &&
          !Array.isArray(value) &&
          configuration["dot-notation"]
        ) {
          // if the value is an object but not an array, check nested object
          setConfigObject(value, fullKey);
        } else {
          // setting arguments via CLI takes precedence over
          // values within the config file.
          if (
            !hasKey(argv, fullKey.split(".")) ||
            (checkAllAliases(fullKey, flags.arrays) &&
              configuration["combine-arrays"])
          ) {
            setArg(fullKey, value);
          }
        }
      });
    }
    // set all config objects passed in opts
    function setConfigObjects() {
      if (typeof configObjects !== "undefined") {
        configObjects.forEach(function (configObject) {
          setConfigObject(configObject);
        });
      }
    }
    function applyEnvVars(argv, configOnly) {
      if (typeof envPrefix === "undefined") return;
      const prefix = typeof envPrefix === "string" ? envPrefix : "";
      const env = mixin.env();
      Object.keys(env).forEach(function (envVar) {
        if (prefix === "" || envVar.lastIndexOf(prefix, 0) === 0) {
          // get array of nested keys and convert them to camel case
          const keys = envVar.split("__").map(function (key, i) {
            if (i === 0) {
              key = key.substring(prefix.length);
            }
            return camelCase(key);
          });
          if (
            ((configOnly && flags.configs[keys.join(".")]) || !configOnly) &&
            !hasKey(argv, keys)
          ) {
            setArg(keys.join("."), env[envVar]);
          }
        }
      });
    }
    function applyCoercions(argv) {
      let coerce;
      const applied = new Set();
      Object.keys(argv).forEach(function (key) {
        if (!applied.has(key)) {
          // If we haven't already coerced this option via one of its aliases
          coerce = checkAllAliases(key, flags.coercions);
          if (typeof coerce === "function") {
            try {
              const value = maybeCoerceNumber(key, coerce(argv[key]));
              [].concat(flags.aliases[key] || [], key).forEach((ali) => {
                applied.add(ali);
                argv[ali] = value;
              });
            } catch (err) {
              error = err;
            }
          }
        }
      });
    }
    function setPlaceholderKeys(argv) {
      flags.keys.forEach((key) => {
        // don't set placeholder keys for dot notation options 'foo.bar'.
        if (~key.indexOf(".")) return;
        if (typeof argv[key] === "undefined") argv[key] = undefined;
      });
      return argv;
    }
    function applyDefaultsAndAliases(obj, aliases, defaults, canLog = false) {
      Object.keys(defaults).forEach(function (key) {
        if (!hasKey(obj, key.split("."))) {
          setKey(obj, key.split("."), defaults[key]);
          if (canLog) defaulted[key] = true;
          (aliases[key] || []).forEach(function (x) {
            if (hasKey(obj, x.split("."))) return;
            setKey(obj, x.split("."), defaults[key]);
          });
        }
      });
    }
    function hasKey(obj, keys) {
      let o = obj;
      if (!configuration["dot-notation"]) keys = [keys.join(".")];
      keys.slice(0, -1).forEach(function (key) {
        o = o[key] || {};
      });
      const key = keys[keys.length - 1];
      if (typeof o !== "object") return false;
      else return key in o;
    }
    function setKey(obj, keys, value) {
      let o = obj;
      if (!configuration["dot-notation"]) keys = [keys.join(".")];
      keys.slice(0, -1).forEach(function (key) {
        // TODO(bcoe): in the next major version of yargs, switch to
        // Object.create(null) for dot notation:
        key = sanitizeKey(key);
        if (typeof o === "object" && o[key] === undefined) {
          o[key] = {};
        }
        if (typeof o[key] !== "object" || Array.isArray(o[key])) {
          // ensure that o[key] is an array, and that the last item is an empty object.
          if (Array.isArray(o[key])) {
            o[key].push({});
          } else {
            o[key] = [o[key], {}];
          }
          // we want to update the empty object at the end of the o[key] array, so set o to that object
          o = o[key][o[key].length - 1];
        } else {
          o = o[key];
        }
      });
      // TODO(bcoe): in the next major version of yargs, switch to
      // Object.create(null) for dot notation:
      const key = sanitizeKey(keys[keys.length - 1]);
      const isTypeArray = checkAllAliases(keys.join("."), flags.arrays);
      const isValueArray = Array.isArray(value);
      let duplicate = configuration["duplicate-arguments-array"];
      // nargs has higher priority than duplicate
      if (!duplicate && checkAllAliases(key, flags.nargs)) {
        duplicate = true;
        if (
          (!isUndefined(o[key]) && flags.nargs[key] === 1) ||
          (Array.isArray(o[key]) && o[key].length === flags.nargs[key])
        ) {
          o[key] = undefined;
        }
      }
      if (value === increment()) {
        o[key] = increment(o[key]);
      } else if (Array.isArray(o[key])) {
        if (duplicate && isTypeArray && isValueArray) {
          o[key] = configuration["flatten-duplicate-arrays"]
            ? o[key].concat(value)
            : (Array.isArray(o[key][0]) ? o[key] : [o[key]]).concat([value]);
        } else if (
          !duplicate &&
          Boolean(isTypeArray) === Boolean(isValueArray)
        ) {
          o[key] = value;
        } else {
          o[key] = o[key].concat([value]);
        }
      } else if (o[key] === undefined && isTypeArray) {
        o[key] = isValueArray ? value : [value];
      } else if (
        duplicate &&
        !(
          o[key] === undefined ||
          checkAllAliases(key, flags.counts) ||
          checkAllAliases(key, flags.bools)
        )
      ) {
        o[key] = [o[key], value];
      } else {
        o[key] = value;
      }
    }
    // extend the aliases list with inferred aliases.
    function extendAliases(...args) {
      args.forEach(function (obj) {
        Object.keys(obj || {}).forEach(function (key) {
          // short-circuit if we've already added a key
          // to the aliases array, for example it might
          // exist in both 'opts.default' and 'opts.key'.
          if (flags.aliases[key]) return;
          flags.aliases[key] = [].concat(aliases[key] || []);
          // For "--option-name", also set argv.optionName
          flags.aliases[key].concat(key).forEach(function (x) {
            if (/-/.test(x) && configuration["camel-case-expansion"]) {
              const c = camelCase(x);
              if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                flags.aliases[key].push(c);
                newAliases[c] = true;
              }
            }
          });
          // For "--optionName", also set argv['option-name']
          flags.aliases[key].concat(key).forEach(function (x) {
            if (
              x.length > 1 &&
              /[A-Z]/.test(x) &&
              configuration["camel-case-expansion"]
            ) {
              const c = decamelize(x, "-");
              if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                flags.aliases[key].push(c);
                newAliases[c] = true;
              }
            }
          });
          flags.aliases[key].forEach(function (x) {
            flags.aliases[x] = [key].concat(
              flags.aliases[key].filter(function (y) {
                return x !== y;
              })
            );
          });
        });
      });
    }
    function checkAllAliases(key, flag) {
      const toCheck = [].concat(flags.aliases[key] || [], key);
      const keys = Object.keys(flag);
      const setAlias = toCheck.find((key) => keys.includes(key));
      return setAlias ? flag[setAlias] : false;
    }
    function hasAnyFlag(key) {
      const flagsKeys = Object.keys(flags);
      const toCheck = [].concat(flagsKeys.map((k) => flags[k]));
      return toCheck.some(function (flag) {
        return Array.isArray(flag) ? flag.includes(key) : flag[key];
      });
    }
    function hasFlagsMatching(arg, ...patterns) {
      const toCheck = [].concat(...patterns);
      return toCheck.some(function (pattern) {
        const match = arg.match(pattern);
        return match && hasAnyFlag(match[1]);
      });
    }
    // based on a simplified version of the short flag group parsing logic
    function hasAllShortFlags(arg) {
      // if this is a negative number, or doesn't start with a single hyphen, it's not a short flag group
      if (arg.match(negative) || !arg.match(/^-[^-]+/)) {
        return false;
      }
      let hasAllFlags = true;
      let next;
      const letters = arg.slice(1).split("");
      for (let j = 0; j < letters.length; j++) {
        next = arg.slice(j + 2);
        if (!hasAnyFlag(letters[j])) {
          hasAllFlags = false;
          break;
        }
        if (
          (letters[j + 1] && letters[j + 1] === "=") ||
          next === "-" ||
          (/[A-Za-z]/.test(letters[j]) &&
            /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) ||
          (letters[j + 1] && letters[j + 1].match(/\W/))
        ) {
          break;
        }
      }
      return hasAllFlags;
    }
    function isUnknownOptionAsArg(arg) {
      return configuration["unknown-options-as-args"] && isUnknownOption(arg);
    }
    function isUnknownOption(arg) {
      arg = arg.replace(/^-{3,}/, "--");
      // ignore negative numbers
      if (arg.match(negative)) {
        return false;
      }
      // if this is a short option group and all of them are configured, it isn't unknown
      if (hasAllShortFlags(arg)) {
        return false;
      }
      // e.g. '--count=2'
      const flagWithEquals = /^-+([^=]+?)=[\s\S]*$/;
      // e.g. '-a' or '--arg'
      const normalFlag = /^-+([^=]+?)$/;
      // e.g. '-a-'
      const flagEndingInHyphen = /^-+([^=]+?)-$/;
      // e.g. '-abc123'
      const flagEndingInDigits = /^-+([^=]+?\d+)$/;
      // e.g. '-a/usr/local'
      const flagEndingInNonWordCharacters = /^-+([^=]+?)\W+.*$/;
      // check the different types of flag styles, including negatedBoolean, a pattern defined near the start of the parse method
      return !hasFlagsMatching(
        arg,
        flagWithEquals,
        negatedBoolean,
        normalFlag,
        flagEndingInHyphen,
        flagEndingInDigits,
        flagEndingInNonWordCharacters
      );
    }
    // make a best effort to pick a default value
    // for an option based on name and type.
    function defaultValue(key) {
      if (
        !checkAllAliases(key, flags.bools) &&
        !checkAllAliases(key, flags.counts) &&
        `${key}` in defaults
      ) {
        return defaults[key];
      } else {
        return defaultForType(guessType(key));
      }
    }
    // return a default value, given the type of a flag.,
    function defaultForType(type) {
      const def = {
        [DefaultValuesForTypeKey.BOOLEAN]: true,
        [DefaultValuesForTypeKey.STRING]: "",
        [DefaultValuesForTypeKey.NUMBER]: undefined,
        [DefaultValuesForTypeKey.ARRAY]: [],
      };
      return def[type];
    }
    // given a flag, enforce a default type.
    function guessType(key) {
      let type = DefaultValuesForTypeKey.BOOLEAN;
      if (checkAllAliases(key, flags.strings))
        type = DefaultValuesForTypeKey.STRING;
      else if (checkAllAliases(key, flags.numbers))
        type = DefaultValuesForTypeKey.NUMBER;
      else if (checkAllAliases(key, flags.bools))
        type = DefaultValuesForTypeKey.BOOLEAN;
      else if (checkAllAliases(key, flags.arrays))
        type = DefaultValuesForTypeKey.ARRAY;
      return type;
    }
    function isUndefined(num) {
      return num === undefined;
    }
    // check user configuration settings for inconsistencies
    function checkConfiguration() {
      // count keys should not be set as array/narg
      Object.keys(flags.counts).find((key) => {
        if (checkAllAliases(key, flags.arrays)) {
          error = Error(
            __(
              "Invalid configuration: %s, opts.count excludes opts.array.",
              key
            )
          );
          return true;
        } else if (checkAllAliases(key, flags.nargs)) {
          error = Error(
            __("Invalid configuration: %s, opts.count excludes opts.narg.", key)
          );
          return true;
        }
        return false;
      });
    }
    return {
      aliases: Object.assign({}, flags.aliases),
      argv: Object.assign(argvReturn, argv),
      configuration: configuration,
      defaulted: Object.assign({}, defaulted),
      error: error,
      newAliases: Object.assign({}, newAliases),
    };
  }
}
// if any aliases reference each other, we should
// merge them together.
function combineAliases(aliases) {
  const aliasArrays = [];
  const combined = Object.create(null);
  let change = true;
  // turn alias lookup hash {key: ['alias1', 'alias2']} into
  // a simple array ['key', 'alias1', 'alias2']
  Object.keys(aliases).forEach(function (key) {
    aliasArrays.push([].concat(aliases[key], key));
  });
  // combine arrays until zero changes are
  // made in an iteration.
  while (change) {
    change = false;
    for (let i = 0; i < aliasArrays.length; i++) {
      for (let ii = i + 1; ii < aliasArrays.length; ii++) {
        const intersect = aliasArrays[i].filter(function (v) {
          return aliasArrays[ii].indexOf(v) !== -1;
        });
        if (intersect.length) {
          aliasArrays[i] = aliasArrays[i].concat(aliasArrays[ii]);
          aliasArrays.splice(ii, 1);
          change = true;
          break;
        }
      }
    }
  }
  // map arrays back to the hash-lookup (de-dupe while
  // we're at it).
  aliasArrays.forEach(function (aliasArray) {
    aliasArray = aliasArray.filter(function (v, i, self) {
      return self.indexOf(v) === i;
    });
    const lastAlias = aliasArray.pop();
    if (lastAlias !== undefined && typeof lastAlias === "string") {
      combined[lastAlias] = aliasArray;
    }
  });
  return combined;
}
// this function should only be called when a count is given as an arg
// it is NOT called to set a default value
// thus we can start the count at 1 instead of 0
function increment(orig) {
  return orig !== undefined ? orig + 1 : 1;
}
// TODO(bcoe): in the next major version of yargs, switch to
// Object.create(null) for dot notation:
function sanitizeKey(key) {
  if (key === "__proto__") return "___proto___";
  return key;
}
function stripQuotes(val) {
  return typeof val === "string" &&
    (val[0] === "'" || val[0] === '"') &&
    val[val.length - 1] === val[0]
    ? val.substring(1, val.length - 1)
    : val;
}

/**
 * @fileoverview Main entrypoint for libraries using yargs-parser in Node.js
 * CJS and ESM environments.
 *
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */
var _a, _b, _c;
// See https://github.com/yargs/yargs-parser#supported-nodejs-versions for our
// version support policy. The YARGS_MIN_NODE_VERSION is used for testing only.
const minNodeVersion =
  process && process.env && process.env.YARGS_MIN_NODE_VERSION
    ? Number(process.env.YARGS_MIN_NODE_VERSION)
    : 12;
const nodeVersion =
  (_b =
    (_a =
      process === null || process === void 0 ? void 0 : process.versions) ===
      null || _a === void 0
      ? void 0
      : _a.node) !== null && _b !== void 0
    ? _b
    : (_c =
        process === null || process === void 0 ? void 0 : process.version) ===
        null || _c === void 0
    ? void 0
    : _c.slice(1);
if (nodeVersion) {
  const major = Number(nodeVersion.match(/^([^.]+)/)[1]);
  if (major < minNodeVersion) {
    throw Error(
      `yargs parser supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`
    );
  }
}
// Creates a yargs-parser instance using Node.js standard libraries:
const env = process ? process.env : {};
const parser = new YargsParser({
  cwd: process.cwd,
  env: () => {
    return env;
  },
  format: require$$2.format,
  normalize: path.normalize,
  resolve: path.resolve,
  // TODO: figure  out a  way to combine ESM and CJS coverage, such  that
  // we can exercise all the lines below:
  require: (path) => {
    if (typeof require !== "undefined") {
      return require(path);
    } else if (path.match(/\.json$/)) {
      // Addresses: https://github.com/yargs/yargs/issues/2040
      return JSON.parse(fs.readFileSync(path, "utf8"));
    } else {
      throw Error("only .json config files are supported in ESM");
    }
  },
});
const yargsParser = function Parser(args, opts) {
  const result = parser.parse(args.slice(), opts);
  return result.argv;
};
yargsParser.detailed = function (args, opts) {
  return parser.parse(args.slice(), opts);
};
yargsParser.camelCase = camelCase;
yargsParser.decamelize = decamelize;
yargsParser.looksLikeNumber = looksLikeNumber;
const argParser = yargsParser;

function parseMilliseconds(milliseconds) {
  if (typeof milliseconds !== "number") {
    throw new TypeError("Expected a number");
  }

  const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;

  return {
    days: roundTowardsZero(milliseconds / 86400000),
    hours: roundTowardsZero(milliseconds / 3600000) % 24,
    minutes: roundTowardsZero(milliseconds / 60000) % 60,
    seconds: roundTowardsZero(milliseconds / 1000) % 60,
    milliseconds: roundTowardsZero(milliseconds) % 1000,
    microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
    nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000,
  };
}

const pluralize = (word, count) => (count === 1 ? word : `${word}s`);

const SECOND_ROUNDING_EPSILON = 0.000_000_1;

function prettyMilliseconds(milliseconds, options = {}) {
  if (!Number.isFinite(milliseconds)) {
    throw new TypeError("Expected a finite number");
  }

  if (options.colonNotation) {
    options.compact = false;
    options.formatSubMilliseconds = false;
    options.separateMilliseconds = false;
    options.verbose = false;
  }

  if (options.compact) {
    options.secondsDecimalDigits = 0;
    options.millisecondsDecimalDigits = 0;
  }

  const result = [];

  const floorDecimals = (value, decimalDigits) => {
    const flooredInterimValue = Math.floor(
      value * 10 ** decimalDigits + SECOND_ROUNDING_EPSILON
    );
    const flooredValue = Math.round(flooredInterimValue) / 10 ** decimalDigits;
    return flooredValue.toFixed(decimalDigits);
  };

  const add = (value, long, short, valueString) => {
    if (
      (result.length === 0 || !options.colonNotation) &&
      value === 0 &&
      !(options.colonNotation && short === "m")
    ) {
      return;
    }

    valueString = (valueString || value || "0").toString();
    let prefix;
    let suffix;
    if (options.colonNotation) {
      prefix = result.length > 0 ? ":" : "";
      suffix = "";
      const wholeDigits = valueString.includes(".")
        ? valueString.split(".")[0].length
        : valueString.length;
      const minLength = result.length > 0 ? 2 : 1;
      valueString =
        "0".repeat(Math.max(0, minLength - wholeDigits)) + valueString;
    } else {
      prefix = "";
      suffix = options.verbose ? " " + pluralize(long, value) : short;
    }

    result.push(prefix + valueString + suffix);
  };

  const parsed = parseMilliseconds(milliseconds);

  add(Math.trunc(parsed.days / 365), "year", "y");
  add(parsed.days % 365, "day", "d");
  add(parsed.hours, "hour", "h");
  add(parsed.minutes, "minute", "m");

  if (
    options.separateMilliseconds ||
    options.formatSubMilliseconds ||
    (!options.colonNotation && milliseconds < 1000)
  ) {
    add(parsed.seconds, "second", "s");
    if (options.formatSubMilliseconds) {
      add(parsed.milliseconds, "millisecond", "ms");
      add(parsed.microseconds, "microsecond", "µs");
      add(parsed.nanoseconds, "nanosecond", "ns");
    } else {
      const millisecondsAndBelow =
        parsed.milliseconds +
        parsed.microseconds / 1000 +
        parsed.nanoseconds / 1e6;

      const millisecondsDecimalDigits =
        typeof options.millisecondsDecimalDigits === "number"
          ? options.millisecondsDecimalDigits
          : 0;

      const roundedMiliseconds =
        millisecondsAndBelow >= 1
          ? Math.round(millisecondsAndBelow)
          : Math.ceil(millisecondsAndBelow);

      const millisecondsString = millisecondsDecimalDigits
        ? millisecondsAndBelow.toFixed(millisecondsDecimalDigits)
        : roundedMiliseconds;

      add(
        Number.parseFloat(millisecondsString),
        "millisecond",
        "ms",
        millisecondsString
      );
    }
  } else {
    const seconds = (milliseconds / 1000) % 60;
    const secondsDecimalDigits =
      typeof options.secondsDecimalDigits === "number"
        ? options.secondsDecimalDigits
        : 1;
    const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
    const secondsString = options.keepDecimalsOnWholeSeconds
      ? secondsFixed
      : secondsFixed.replace(/\.0+$/, "");
    add(Number.parseFloat(secondsString), "second", "s", secondsString);
  }

  if (result.length === 0) {
    return "0" + (options.verbose ? " milliseconds" : "ms");
  }

  if (options.compact) {
    return result[0];
  }

  if (typeof options.unitCount === "number") {
    const separator = options.colonNotation ? "" : " ";
    return result.slice(0, Math.max(options.unitCount, 1)).join(separator);
  }

  return options.colonNotation ? result.join("") : result.join(" ");
}

const BYTE_UNITS = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

const BIBYTE_UNITS = [
  "B",
  "kiB",
  "MiB",
  "GiB",
  "TiB",
  "PiB",
  "EiB",
  "ZiB",
  "YiB",
];

const BIT_UNITS = [
  "b",
  "kbit",
  "Mbit",
  "Gbit",
  "Tbit",
  "Pbit",
  "Ebit",
  "Zbit",
  "Ybit",
];

const BIBIT_UNITS = [
  "b",
  "kibit",
  "Mibit",
  "Gibit",
  "Tibit",
  "Pibit",
  "Eibit",
  "Zibit",
  "Yibit",
];

/*
Formats the given number using `Number#toLocaleString`.
- If locale is a string, the value is expected to be a locale-key (for example: `de`).
- If locale is true, the system default locale is used for translation.
- If no value for locale is specified, the number is returned unmodified.
*/
const toLocaleString = (number, locale, options) => {
  let result = number;
  if (typeof locale === "string" || Array.isArray(locale)) {
    result = number.toLocaleString(locale, options);
  } else if (locale === true || options !== undefined) {
    result = number.toLocaleString(undefined, options);
  }

  return result;
};

function prettyBytes(number, options) {
  if (!Number.isFinite(number)) {
    throw new TypeError(
      `Expected a finite number, got ${typeof number}: ${number}`
    );
  }

  options = {
    bits: false,
    binary: false,
    ...options,
  };

  const UNITS = options.bits
    ? options.binary
      ? BIBIT_UNITS
      : BIT_UNITS
    : options.binary
    ? BIBYTE_UNITS
    : BYTE_UNITS;

  if (options.signed && number === 0) {
    return ` 0 ${UNITS[0]}`;
  }

  const isNegative = number < 0;
  const prefix = isNegative ? "-" : options.signed ? "+" : "";

  if (isNegative) {
    number = -number;
  }

  let localeOptions;

  if (options.minimumFractionDigits !== undefined) {
    localeOptions = { minimumFractionDigits: options.minimumFractionDigits };
  }

  if (options.maximumFractionDigits !== undefined) {
    localeOptions = {
      maximumFractionDigits: options.maximumFractionDigits,
      ...localeOptions,
    };
  }

  if (number < 1) {
    const numberString = toLocaleString(number, options.locale, localeOptions);
    return prefix + numberString + " " + UNITS[0];
  }

  const exponent = Math.min(
    Math.floor(
      options.binary
        ? Math.log(number) / Math.log(1024)
        : Math.log10(number) / 3
    ),
    UNITS.length - 1
  );
  number /= (options.binary ? 1024 : 1000) ** exponent;

  if (!localeOptions) {
    number = number.toPrecision(3);
  }

  const numberString = toLocaleString(
    Number(number),
    options.locale,
    localeOptions
  );

  const unit = UNITS[exponent];

  return prefix + numberString + " " + unit;
}

function printTimings(timings) {
  for (const [label, [time, memory, total]] of Object.entries(timings)) {
    const appliedColor =
      label[0] === "#"
        ? label[1] === "#"
          ? rollup.bold
          : rollup.underline
        : (text) => text;
    const row = `${label}: ${time.toFixed(0)}ms, ${prettyBytes(
      memory
    )} / ${prettyBytes(total)}`;
    console.info(appliedColor(row));
  }
}

async function build(inputOptions, warnings, silent = false) {
  const outputOptions = inputOptions.output;
  const useStdout = !outputOptions[0].file && !outputOptions[0].dir;
  const start = Date.now();
  const files = useStdout
    ? ["stdout"]
    : outputOptions.map((t) => rollup.relativeId(t.file || t.dir));
  if (!silent) {
    let inputFiles;
    if (typeof inputOptions.input === "string") {
      inputFiles = inputOptions.input;
    } else if (Array.isArray(inputOptions.input)) {
      inputFiles = inputOptions.input.join(", ");
    } else if (
      typeof inputOptions.input === "object" &&
      inputOptions.input !== null
    ) {
      inputFiles = Object.values(inputOptions.input).join(", ");
    }
    rollup.stderr(
      rollup.cyan(
        `\n${rollup.bold(inputFiles)} → ${rollup.bold(files.join(", "))}...`
      )
    );
  }
  const bundle = await rollup.rollup(inputOptions);
  if (useStdout) {
    const output = outputOptions[0];
    if (output.sourcemap && output.sourcemap !== "inline") {
      rollup.handleError(rollup.errorOnlyInlineSourcemapsForStdout());
    }
    const { output: outputs } = await bundle.generate(output);
    for (const file of outputs) {
      if (outputs.length > 1)
        process$1.stdout.write(
          `\n${rollup.cyan(rollup.bold(`//→ ${file.fileName}:`))}\n`
        );
      process$1.stdout.write(file.type === "asset" ? file.source : file.code);
    }
    if (!silent) {
      warnings.flush();
    }
    return;
  }
  await Promise.all(outputOptions.map(bundle.write));
  await bundle.close();
  if (!silent) {
    warnings.flush();
    rollup.stderr(
      rollup.green(
        `created ${rollup.bold(files.join(", "))} in ${rollup.bold(
          prettyMilliseconds(Date.now() - start)
        )}`
      )
    );
    if (bundle && bundle.getTimings) {
      printTimings(bundle.getTimings());
    }
  }
}

async function getConfigPath(commandConfig) {
  if (commandConfig === true) {
    return path.resolve(await findConfigFileNameInCwd());
  }
  if (commandConfig.slice(0, 5) === "node:") {
    const packageName = commandConfig.slice(5);
    try {
      // eslint-disable-next-line unicorn/prefer-module
      return require.resolve(`rollup-config-${packageName}`, {
        paths: [process$1.cwd()],
      });
    } catch {
      try {
        // eslint-disable-next-line unicorn/prefer-module
        return require.resolve(packageName, { paths: [process$1.cwd()] });
      } catch (error) {
        if (error.code === "MODULE_NOT_FOUND") {
          rollup.handleError(rollup.errorMissingExternalConfig(commandConfig));
        }
        throw error;
      }
    }
  }
  return path.resolve(commandConfig);
}
async function findConfigFileNameInCwd() {
  const filesInWorkingDirectory = new Set(
    await promises.readdir(process$1.cwd())
  );
  for (const extension of ["mjs", "cjs", "ts"]) {
    const fileName = `${DEFAULT_CONFIG_BASE}.${extension}`;
    if (filesInWorkingDirectory.has(fileName)) return fileName;
  }
  return DEFAULT_CONFIG_BASE.indexOf(".js") >= 0
    ? DEFAULT_CONFIG_BASE
    : `${DEFAULT_CONFIG_BASE}.js`;
}

async function loadConfigFromCommand(command) {
  const warnings = loadConfigFile_js.batchWarnings();
  if (!command.input && (command.stdin || !process$1.stdin.isTTY)) {
    command.input = loadConfigFile_js.stdinName;
  }
  const options = await rollup.mergeOptions(
    { input: [] },
    command,
    warnings.add
  );
  await loadConfigFile_js.addCommandPluginsToInputOptions(options, command);
  return { options: [options], warnings };
}

async function runRollup(command) {
  let inputSource;
  if (command._.length > 0) {
    if (command.input) {
      rollup.handleError(rollup.errorDuplicateImportOptions());
    }
    inputSource = command._;
  } else if (typeof command.input === "string") {
    inputSource = [command.input];
  } else {
    inputSource = command.input;
  }
  if (inputSource && inputSource.length > 0) {
    if (inputSource.some((input) => input.includes("="))) {
      command.input = {};
      for (const input of inputSource) {
        const equalsIndex = input.indexOf("=");
        const value = input.slice(Math.max(0, equalsIndex + 1));
        const key =
          input.slice(0, Math.max(0, equalsIndex)) ||
          rollup.getAliasName(input);
        command.input[key] = value;
      }
    } else {
      command.input = inputSource;
    }
  }
  if (command.environment) {
    const environment = Array.isArray(command.environment)
      ? command.environment
      : [command.environment];
    for (const argument of environment) {
      for (const pair of argument.split(",")) {
        const [key, ...value] = pair.split(":");
        process$1.env[key] =
          value.length === 0 ? String(true) : value.join(":");
      }
    }
  }
  if (rollup.isWatchEnabled(command.watch)) {
    await fseventsImporter.loadFsEvents();
    const { watch } = await Promise.resolve().then(() =>
      require("rollup/dist/shared/watch-cli.js")
    );
    watch(command);
  } else {
    try {
      const { options, warnings } = await getConfigs(command);
      try {
        for (const inputOptions of options) {
          await build(inputOptions, warnings, command.silent);
        }
        if (command.failAfterWarnings && warnings.warningOccurred) {
          warnings.flush();
          rollup.handleError(rollup.errorFailAfterWarnings());
        }
      } catch (error) {
        warnings.flush();
        rollup.handleError(error);
      }
    } catch (error) {
      rollup.handleError(error);
    }
  }
}
async function getConfigs(command) {
  if (command.config) {
    const configFile = await getConfigPath(command.config);
    const { options, warnings } = await loadConfigFile_js.loadConfigFile(
      configFile,
      command
    );
    return { options, warnings };
  }
  return await loadConfigFromCommand(command);
}

const command = argParser(process$1.argv.slice(2), {
  alias: rollup.commandAliases,
  configuration: { "camel-case-expansion": false },
});
if (command.help || (process$1.argv.length <= 2 && process$1.stdin.isTTY)) {
  console.log(`\n${help.replace("__VERSION__", rollup.version)}\n`);
} else if (command.version) {
  console.log(`rollup v${rollup.version}`);
} else {
  try {
    // eslint-disable-next-line unicorn/prefer-module
    require("source-map-support").install();
  } catch {
    // do nothing
  }
  runRollup(command);
}


export { getConfigPath, loadConfigFromCommand, prettyMilliseconds, printTimings };
// exports.getConfigPath = getConfigPath;
// exports.loadConfigFromCommand = loadConfigFromCommand;
// exports.prettyMilliseconds = prettyMilliseconds;
// exports.printTimings = printTimings;
//# sourceMappingURL=rollup.map
