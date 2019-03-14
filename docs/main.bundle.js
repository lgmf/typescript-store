/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/todoList */ "./src/components/todoList.ts");
/* harmony import */ var _components_addTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/addTodo */ "./src/components/addTodo.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/reducers */ "./src/store/reducers.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./src/store/store.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
// Components




// Styles

const reducers = [
    { 'todos': _store_reducers__WEBPACK_IMPORTED_MODULE_2__["todoReducer"] },
];
const store = new _store_store__WEBPACK_IMPORTED_MODULE_3__["Store"](reducers);
Object(_components_todoList__WEBPACK_IMPORTED_MODULE_0__["default"])(store);
Object(_components_addTodo__WEBPACK_IMPORTED_MODULE_1__["default"])(store);
// Counter(store);


/***/ }),

/***/ "./src/components/addTodo.ts":
/*!***********************************!*\
  !*** ./src/components/addTodo.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions.ts");
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.ts");


/* harmony default export */ __webpack_exports__["default"] = ((store) => {
    const template = `
    <input
      id="todo-label"
      type="text"
      placeholder="What to do next?">
        
    <button id="add">Add Todo</button>
  `;
    const onInit = () => {
        const addBtn = document.querySelector('#add');
        addBtn.addEventListener('click', () => {
            const { value } = document.querySelector('#todo-label');
            const newTodo = {
                label: value,
                complete: false
            };
            store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_0__["AddTodo"](newTodo));
        });
    };
    Object(_utils_render__WEBPACK_IMPORTED_MODULE_1__["render"])(template, '#add-todo', onInit);
});


/***/ }),

/***/ "./src/components/todoList.ts":
/*!************************************!*\
  !*** ./src/components/todoList.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render */ "./src/utils/render.ts");

/* harmony default export */ __webpack_exports__["default"] = ((store) => {
    store.subscribe(({ todos }) => {
        const todoList = todos.data;
        const template = (!todoList.length)
            ? '<li class="-empty">Congrats! All todos are completed</li>'
            : todoList.map(t => `<li class="${t.complete ? '-done' : ''}">${t.label}</li>`).join('');
        Object(_utils_render__WEBPACK_IMPORTED_MODULE_0__["render"])(template, '#todo-list');
    });
});


/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/*! exports provided: INCREMENT, Increment, ADD_TODO, AddTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_counter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/counter.actions */ "./src/store/actions/counter.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return _actions_counter_actions__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Increment", function() { return _actions_counter_actions__WEBPACK_IMPORTED_MODULE_0__["Increment"]; });

/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/todo.actions */ "./src/store/actions/todo.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TODO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddTodo", function() { return _actions_todo_actions__WEBPACK_IMPORTED_MODULE_1__["AddTodo"]; });





/***/ }),

/***/ "./src/store/actions/counter.actions.ts":
/*!**********************************************!*\
  !*** ./src/store/actions/counter.actions.ts ***!
  \**********************************************/
/*! exports provided: INCREMENT, Increment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Increment", function() { return Increment; });
const INCREMENT = 'Increment';
class Increment {
    constructor() {
        this.type = INCREMENT;
    }
}


/***/ }),

/***/ "./src/store/actions/todo.actions.ts":
/*!*******************************************!*\
  !*** ./src/store/actions/todo.actions.ts ***!
  \*******************************************/
/*! exports provided: ADD_TODO, AddTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodo", function() { return AddTodo; });
const ADD_TODO = 'Add Todo';
class AddTodo {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
        this.payload = payload;
    }
}


/***/ }),

/***/ "./src/store/reducers.ts":
/*!*******************************!*\
  !*** ./src/store/reducers.ts ***!
  \*******************************/
/*! exports provided: counterReducer, todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers_counter_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/counter.reducer */ "./src/store/reducers/counter.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "counterReducer", function() { return _reducers_counter_reducer__WEBPACK_IMPORTED_MODULE_0__["counterReducer"]; });

/* harmony import */ var _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/todo.reducer */ "./src/store/reducers/todo.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_1__["todoReducer"]; });





/***/ }),

/***/ "./src/store/reducers/counter.reducer.ts":
/*!***********************************************!*\
  !*** ./src/store/reducers/counter.reducer.ts ***!
  \***********************************************/
/*! exports provided: counterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterReducer", function() { return counterReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/store/actions.ts");

const initialState = {
    count: 0
};
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]: {
            return Object.assign({}, state, { count: state.count + 1 });
        }
    }
    return state;
}


/***/ }),

/***/ "./src/store/reducers/todo.reducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/todo.reducer.ts ***!
  \********************************************/
/*! exports provided: todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/store/actions.ts");

const initialState = {
    data: []
};
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TODO"]: {
            return Object.assign({}, state, { data: [
                    ...state.data,
                    action.payload
                ] });
        }
    }
    return state;
}


/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
class Store {
    constructor(reducers) {
        this.subscribers = [];
        this.reducers = reducers;
        this.reduce({}, { type: null });
    }
    get state() {
        return this._state;
    }
    subscribe(subscriber) {
        this.subscribers = [...this.subscribers, subscriber];
        subscriber(this.state);
        return {
            unsubscribe: () => this.unsubscribe(subscriber)
        };
    }
    dispatch(action) {
        this.reduce(this.state, action);
    }
    reduce(state, action) {
        this.reducers.forEach(reducer => {
            const channel = Object.keys(reducer)[0];
            const fn = Object.values(reducer)[0];
            const newState = fn(state[channel], action);
            this._state = Object.assign({}, this._state, { [channel]: newState });
            this.notify();
        });
    }
    notify() {
        this.subscribers.forEach(s => s(this.state));
    }
    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/render.ts":
/*!*****************************!*\
  !*** ./src/utils/render.ts ***!
  \*****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
const render = (template, container, onInit) => {
    const node = document.querySelector(container);
    if (!node)
        return;
    node.innerHTML = template;
    if (!!onInit) {
        onInit();
    }
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZGRUb2RvLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZG9MaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zL2NvdW50ZXIuYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvYWN0aW9ucy90b2RvLmFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2Vycy9jb3VudGVyLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3RvZG8ucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVuZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFt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LENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sV0FBVyxDQUFDLFVBQVU7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxVQUFVLENBQUM7SUFDbkUsQ0FBQztDQUVGOzs7Ozs7Ozs7Ozs7QUNoREQsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBTyxNQUFNLE1BQU0sR0FBRyxDQUFDLFFBQWdCLEVBQUUsU0FBaUIsRUFBRSxNQUFpQixFQUFFLEVBQUU7SUFDL0UsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUUvQyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU87SUFFbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFFMUIsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1FBQ1osTUFBTSxFQUFFLENBQUM7S0FDVjtBQUNILENBQUMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vY29tcG9uZW50cy90b2RvTGlzdCc7XG5pbXBvcnQgQWRkVG9kbyBmcm9tICcuL2NvbXBvbmVudHMvYWRkVG9kbyc7XG5cbi8vIFN0b3JlXG5pbXBvcnQgeyBSZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUvbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IHRvZG9SZWR1Y2VyIH0gZnJvbSAnLi9zdG9yZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vc3RvcmUvc3RvcmUnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCByZWR1Y2VyczogUmVkdWNlcnMgPSBbXG4gIHsgJ3RvZG9zJzogdG9kb1JlZHVjZXIgfSxcbiAgLy8geyAnY291bnRlcic6IGNvdW50ZXJSZWR1Y2VyIH1cbl07XG5cbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHJlZHVjZXJzKTtcblxuVG9kb0xpc3Qoc3RvcmUpO1xuQWRkVG9kbyhzdG9yZSk7XG5cbi8vIENvdW50ZXIoc3RvcmUpO1xuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcbmltcG9ydCB7IEFkZFRvZG8gfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi4vdXRpbHMvcmVuZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0b3JlOiBTdG9yZSkgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICA8aW5wdXRcbiAgICAgIGlkPVwidG9kby1sYWJlbFwiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIldoYXQgdG8gZG8gbmV4dD9cIj5cbiAgICAgICAgXG4gICAgPGJ1dHRvbiBpZD1cImFkZFwiPkFkZCBUb2RvPC9idXR0b24+XG4gIGA7XG5cbiAgY29uc3Qgb25Jbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxhYmVsJykgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgICAgY29uc3QgbmV3VG9kbzogVG9kbyA9IHtcbiAgICAgICAgbGFiZWw6IHZhbHVlLFxuICAgICAgICBjb21wbGV0ZTogZmFsc2VcbiAgICAgIH1cblxuICAgICAgc3RvcmUuZGlzcGF0Y2gobmV3IEFkZFRvZG8obmV3VG9kbykpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKHRlbXBsYXRlLCAnI2FkZC10b2RvJywgb25Jbml0KTtcbn1cblxuIiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuLi91dGlscy9yZW5kZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RvcmU6IFN0b3JlKSA9PiB7XG4gIHN0b3JlLnN1YnNjcmliZSgoeyB0b2RvcyB9KSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSB0b2Rvcy5kYXRhO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gKCF0b2RvTGlzdC5sZW5ndGgpXG4gICAgICA/ICc8bGkgY2xhc3M9XCItZW1wdHlcIj5Db25ncmF0cyEgQWxsIHRvZG9zIGFyZSBjb21wbGV0ZWQ8L2xpPidcbiAgICAgIDogdG9kb0xpc3QubWFwKHQgPT4gYDxsaSBjbGFzcz1cIiR7dC5jb21wbGV0ZSA/ICctZG9uZScgOiAnJ31cIj4ke3QubGFiZWx9PC9saT5gKS5qb2luKCcnKVxuXG4gICAgcmVuZGVyKHRlbXBsYXRlLCAnI3RvZG8tbGlzdCcpO1xuICB9KTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYWN0aW9ucy9jb3VudGVyLmFjdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb25zL3RvZG8uYWN0aW9ucyc7XG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiLi4vbW9kZWxzL2luZGV4XCI7XG5cbmV4cG9ydCBjb25zdCBJTkNSRU1FTlQgPSAnSW5jcmVtZW50JztcblxuZXhwb3J0IGNsYXNzIEluY3JlbWVudCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHR5cGUgPSBJTkNSRU1FTlQ7XG59XG5cbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9kbyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgQUREX1RPRE8gPSAnQWRkIFRvZG8nO1xuXG5leHBvcnQgY2xhc3MgQWRkVG9kbyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHR5cGUgPSBBRERfVE9ETztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVG9kbykge1xuICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcmVkdWNlcnMvY291bnRlci5yZWR1Y2VyJztcbmV4cG9ydCAqIGZyb20gJy4vcmVkdWNlcnMvdG9kby5yZWR1Y2VyJztcbiIsIlxuaW1wb3J0IHsgQ291bnRlclN0YXRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3N0YXRlJztcbmltcG9ydCB7IElOQ1JFTUVOVCB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBDb3VudGVyU3RhdGUgPSB7XG4gIGNvdW50OiAwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3VudGVyUmVkdWNlcihzdGF0ZTogQ291bnRlclN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJTkNSRU1FTlQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb3VudDogc3RhdGUuY291bnQgKyAxXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiXG5pbXBvcnQgeyBUb2RvU3RhdGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvc3RhdGUnO1xuaW1wb3J0IHsgQUREX1RPRE8gfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4uL21vZGVscy9pbmRleCc7XG5cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBUb2RvU3RhdGUgPSB7XG4gIGRhdGE6IFtdXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kb1JlZHVjZXIoc3RhdGU6IFRvZG9TdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1RPRE86IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgLi4uc3RhdGUuZGF0YSxcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBdXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCB7IFN1YnNjcmliZXJzLCBSZWR1Y2VycywgU3Vic2NyaWJlciwgU3Vic2NyaXB0aW9uLCBBY3Rpb24gfSBmcm9tICcuL21vZGVscy9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gIHByaXZhdGUgc3Vic2NyaWJlcnM6IFN1YnNjcmliZXJzID0gW107XG4gIHByaXZhdGUgcmVkdWNlcnM6IFJlZHVjZXJzO1xuICBwcml2YXRlIF9zdGF0ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHJlZHVjZXJzOiBSZWR1Y2Vycykge1xuICAgIHRoaXMucmVkdWNlcnMgPSByZWR1Y2VycztcbiAgICB0aGlzLnJlZHVjZSh7fSwgeyB0eXBlOiBudWxsIH0pO1xuICB9XG5cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIHN1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyKTogU3Vic2NyaXB0aW9uIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gWy4uLnRoaXMuc3Vic2NyaWJlcnMsIHN1YnNjcmliZXJdO1xuICAgIHN1YnNjcmliZXIodGhpcy5zdGF0ZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHRoaXMudW5zdWJzY3JpYmUoc3Vic2NyaWJlcilcbiAgICB9XG4gIH1cblxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMucmVkdWNlKHRoaXMuc3RhdGUsIGFjdGlvbik7XG4gIH1cblxuICBwcml2YXRlIHJlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgdGhpcy5yZWR1Y2Vycy5mb3JFYWNoKHJlZHVjZXIgPT4ge1xuICAgICAgY29uc3QgY2hhbm5lbCA9IE9iamVjdC5rZXlzKHJlZHVjZXIpWzBdO1xuICAgICAgY29uc3QgZm4gPSBPYmplY3QudmFsdWVzKHJlZHVjZXIpWzBdO1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSBmbihzdGF0ZVtjaGFubmVsXSwgYWN0aW9uKTtcblxuICAgICAgdGhpcy5fc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9zdGF0ZSwgeyBbY2hhbm5lbF06IG5ld1N0YXRlIH0pO1xuICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5KCkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzID0+IHModGhpcy5zdGF0ZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IHRoaXMuc3Vic2NyaWJlcnMuZmlsdGVyKHMgPT4gcyAhPT0gc3Vic2NyaWJlcilcbiAgfVxuXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgcmVuZGVyID0gKHRlbXBsYXRlOiBzdHJpbmcsIGNvbnRhaW5lcjogc3RyaW5nLCBvbkluaXQ/OiBGdW5jdGlvbikgPT4ge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuXG4gIGlmICghbm9kZSkgcmV0dXJuO1xuXG4gIG5vZGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG5cbiAgaWYgKCEhb25Jbml0KSB7XG4gICAgb25Jbml0KCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=