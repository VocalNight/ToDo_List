/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Note = (title, description, priority) => {
    
    const getTitle = () => title;
    const getDescription = () => description;
    const getPriority = () => priority;

    return {getTitle, getDescription, getPriority}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Project = (projectName) => {
    let notes = [];

    const getNotes = () => notes;
    const getProjectName = () => projectName;

    const addNotes = (note) => {
        notes.push(note);
    }

    return {
        getNotes, addNotes, getProjectName
    }
}


const Projects = () => {
    let index = [];
    let today = [];
    let week = [];
    let custom = [];

    const getIndex = () => index;
    const getToday = () => today;
    const getWeek = () => week;


    const getCustom = (projectName) => {
        return custom.find(projectName);
    }

    const addCustomProject = (project) => {
        custom.push(project);
    }

    const addIndex = (note) => {
        index.push(note);
    }

    const addToday = (note) => {
        today.push(note);
    }

    const addWeek = (note) => {
        week.push(note);
    }

    return {
        getCustom, getIndex, getToday, getWeek, addCustomProject, addIndex, addToday, addWeek
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({Project, Projects});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ "./src/note.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");




let projects = _projects__WEBPACK_IMPORTED_MODULE_1__["default"].Projects();

//Testing creation of note

projects.addToday((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'b', 'c'))
projects.addToday((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('d', 'b', 'c'))
projects.addToday((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('f', 'b', 'c'))
projects.addToday((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('g', 'b', 'c'))

console.log(projects.getToday()[0].getTitle())





function write_letters(){
    let items = document.querySelector('.inboxList');
    console.log(items);

    for (let i = 0; i < projects.getToday().length; i++ ) {
        let item = document.createElement("li");
        console.log(projects.getToday()[i]);
        item.innerHTML = projects.getToday()[i].getTitle();
        item.onclick = () => alert(projects.getToday()[i].getTitle());
        item.style.cursor = "pointer"
        items.appendChild(item);
    }

}

write_letters();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNUcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxDQUFDLGtCQUFrQjs7Ozs7OztVQ3BEbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDYTtBQUN2QztBQUNBO0FBQ0EsZUFBZSwwREFBdUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFLO0FBQ3ZCLGtCQUFrQixpREFBSztBQUN2QixrQkFBa0IsaURBQUs7QUFDdkIsa0JBQWtCLGlEQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0NBQWdDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbm90ZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5vdGUgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xyXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XHJcblxyXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldFByaW9yaXR5fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RlO1xyXG4iLCJjb25zdCBQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICBsZXQgbm90ZXMgPSBbXTtcclxuXHJcbiAgICBjb25zdCBnZXROb3RlcyA9ICgpID0+IG5vdGVzO1xyXG4gICAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSAoKSA9PiBwcm9qZWN0TmFtZTtcclxuXHJcbiAgICBjb25zdCBhZGROb3RlcyA9IChub3RlKSA9PiB7XHJcbiAgICAgICAgbm90ZXMucHVzaChub3RlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldE5vdGVzLCBhZGROb3RlcywgZ2V0UHJvamVjdE5hbWVcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gW107XHJcbiAgICBsZXQgdG9kYXkgPSBbXTtcclxuICAgIGxldCB3ZWVrID0gW107XHJcbiAgICBsZXQgY3VzdG9tID0gW107XHJcblxyXG4gICAgY29uc3QgZ2V0SW5kZXggPSAoKSA9PiBpbmRleDtcclxuICAgIGNvbnN0IGdldFRvZGF5ID0gKCkgPT4gdG9kYXk7XHJcbiAgICBjb25zdCBnZXRXZWVrID0gKCkgPT4gd2VlaztcclxuXHJcblxyXG4gICAgY29uc3QgZ2V0Q3VzdG9tID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGN1c3RvbS5maW5kKHByb2plY3ROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRDdXN0b21Qcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBjdXN0b20ucHVzaChwcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRJbmRleCA9IChub3RlKSA9PiB7XHJcbiAgICAgICAgaW5kZXgucHVzaChub3RlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRUb2RheSA9IChub3RlKSA9PiB7XHJcbiAgICAgICAgdG9kYXkucHVzaChub3RlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRXZWVrID0gKG5vdGUpID0+IHtcclxuICAgICAgICB3ZWVrLnB1c2gobm90ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRDdXN0b20sIGdldEluZGV4LCBnZXRUb2RheSwgZ2V0V2VlaywgYWRkQ3VzdG9tUHJvamVjdCwgYWRkSW5kZXgsIGFkZFRvZGF5LCBhZGRXZWVrXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtQcm9qZWN0LCBQcm9qZWN0c31cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbm90ZXMgZnJvbSAnLi9ub3RlJ1xyXG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0cydcclxuXHJcblxyXG5sZXQgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0cygpO1xyXG5cclxuLy9UZXN0aW5nIGNyZWF0aW9uIG9mIG5vdGVcclxuXHJcbnByb2plY3RzLmFkZFRvZGF5KG5vdGVzKCdhJywgJ2InLCAnYycpKVxyXG5wcm9qZWN0cy5hZGRUb2RheShub3RlcygnZCcsICdiJywgJ2MnKSlcclxucHJvamVjdHMuYWRkVG9kYXkobm90ZXMoJ2YnLCAnYicsICdjJykpXHJcbnByb2plY3RzLmFkZFRvZGF5KG5vdGVzKCdnJywgJ2InLCAnYycpKVxyXG5cclxuY29uc29sZS5sb2cocHJvamVjdHMuZ2V0VG9kYXkoKVswXS5nZXRUaXRsZSgpKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHdyaXRlX2xldHRlcnMoKXtcclxuICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveExpc3QnKTtcclxuICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmdldFRvZGF5KCkubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMuZ2V0VG9kYXkoKVtpXSk7XHJcbiAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBwcm9qZWN0cy5nZXRUb2RheSgpW2ldLmdldFRpdGxlKCk7XHJcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4gYWxlcnQocHJvamVjdHMuZ2V0VG9kYXkoKVtpXS5nZXRUaXRsZSgpKTtcclxuICAgICAgICBpdGVtLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXHJcbiAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG53cml0ZV9sZXR0ZXJzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==