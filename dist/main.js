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

//Divs


//Buttons

const inboxBtn = document.querySelector('#inboxBtn')
const todayBtn = document.querySelector('#todayBtn')
const weekBtn = document.querySelector('#weekBtn')

inboxBtn.addEventListener('click', () => showNotes(projects.getIndex()));

todayBtn.addEventListener('click', () => showNotes(projects.getToday()));

weekBtn.addEventListener('click', () => showNotes(projects.getWeek()));

//Testing creation of note

projects.addToday((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'b', 'c'))
projects.addToday((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('d', 'b', 'c'))
projects.addToday((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('f', 'b', 'c'))
projects.addToday((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('g', 'b', 'c'))

projects.addWeek((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('n', 'b', 'c'))
projects.addWeek((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('l', 'b', 'c'))
projects.addWeek((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'b', 'c'))
projects.addWeek((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('z', 'b', 'c'))

projects.addIndex((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('d', 'b', 'c'))
projects.addIndex((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('s', 'b', 'c'))
projects.addIndex((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('a', 'b', 'c'))
projects.addIndex((0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])('x', 'b', 'c'))





// Showing the notes on screen
function showNotes(project){
    let items = document.querySelector('.notesList');
    items.innerHTML = '';

    for (let i = 0; i < project.length; i++ ) {
        let item = document.createElement("li");
        item.innerHTML = project[i].getTitle();
        item.onclick = () => alert(project[i].getTitle());
        item.style.cursor = "pointer"
        items.appendChild(item);
    }

}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNUcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxDQUFDLGtCQUFrQjs7Ozs7OztVQ3BEbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDYTtBQUN2QztBQUNBO0FBQ0EsZUFBZSwwREFBdUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFLO0FBQ3ZCLGtCQUFrQixpREFBSztBQUN2QixrQkFBa0IsaURBQUs7QUFDdkIsa0JBQWtCLGlEQUFLO0FBQ3ZCO0FBQ0EsaUJBQWlCLGlEQUFLO0FBQ3RCLGlCQUFpQixpREFBSztBQUN0QixpQkFBaUIsaURBQUs7QUFDdEIsaUJBQWlCLGlEQUFLO0FBQ3RCO0FBQ0Esa0JBQWtCLGlEQUFLO0FBQ3ZCLGtCQUFrQixpREFBSztBQUN2QixrQkFBa0IsaURBQUs7QUFDdkIsa0JBQWtCLGlEQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL25vdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOb3RlID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcclxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xyXG5cclxuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXRQcmlvcml0eX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcclxuIiwiY29uc3QgUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgbGV0IG5vdGVzID0gW107XHJcblxyXG4gICAgY29uc3QgZ2V0Tm90ZXMgPSAoKSA9PiBub3RlcztcclxuICAgIGNvbnN0IGdldFByb2plY3ROYW1lID0gKCkgPT4gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgY29uc3QgYWRkTm90ZXMgPSAobm90ZSkgPT4ge1xyXG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXROb3RlcywgYWRkTm90ZXMsIGdldFByb2plY3ROYW1lXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGxldCBpbmRleCA9IFtdO1xyXG4gICAgbGV0IHRvZGF5ID0gW107XHJcbiAgICBsZXQgd2VlayA9IFtdO1xyXG4gICAgbGV0IGN1c3RvbSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGdldEluZGV4ID0gKCkgPT4gaW5kZXg7XHJcbiAgICBjb25zdCBnZXRUb2RheSA9ICgpID0+IHRvZGF5O1xyXG4gICAgY29uc3QgZ2V0V2VlayA9ICgpID0+IHdlZWs7XHJcblxyXG5cclxuICAgIGNvbnN0IGdldEN1c3RvbSA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjdXN0b20uZmluZChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkQ3VzdG9tUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY3VzdG9tLnB1c2gocHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkSW5kZXggPSAobm90ZSkgPT4ge1xyXG4gICAgICAgIGluZGV4LnB1c2gobm90ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkVG9kYXkgPSAobm90ZSkgPT4ge1xyXG4gICAgICAgIHRvZGF5LnB1c2gobm90ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkV2VlayA9IChub3RlKSA9PiB7XHJcbiAgICAgICAgd2Vlay5wdXNoKG5vdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0Q3VzdG9tLCBnZXRJbmRleCwgZ2V0VG9kYXksIGdldFdlZWssIGFkZEN1c3RvbVByb2plY3QsIGFkZEluZGV4LCBhZGRUb2RheSwgYWRkV2Vla1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7UHJvamVjdCwgUHJvamVjdHN9XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG5vdGVzIGZyb20gJy4vbm90ZSdcclxuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdHMnXHJcblxyXG5cclxubGV0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuUHJvamVjdHMoKTtcclxuXHJcbi8vRGl2c1xyXG5cclxuXHJcbi8vQnV0dG9uc1xyXG5cclxuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5ib3hCdG4nKVxyXG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheUJ0bicpXHJcbmNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2Vla0J0bicpXHJcblxyXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dOb3Rlcyhwcm9qZWN0cy5nZXRJbmRleCgpKSk7XHJcblxyXG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dOb3Rlcyhwcm9qZWN0cy5nZXRUb2RheSgpKSk7XHJcblxyXG53ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd05vdGVzKHByb2plY3RzLmdldFdlZWsoKSkpO1xyXG5cclxuLy9UZXN0aW5nIGNyZWF0aW9uIG9mIG5vdGVcclxuXHJcbnByb2plY3RzLmFkZFRvZGF5KG5vdGVzKCdhJywgJ2InLCAnYycpKVxyXG5wcm9qZWN0cy5hZGRUb2RheShub3RlcygnZCcsICdiJywgJ2MnKSlcclxucHJvamVjdHMuYWRkVG9kYXkobm90ZXMoJ2YnLCAnYicsICdjJykpXHJcbnByb2plY3RzLmFkZFRvZGF5KG5vdGVzKCdnJywgJ2InLCAnYycpKVxyXG5cclxucHJvamVjdHMuYWRkV2Vlayhub3RlcygnbicsICdiJywgJ2MnKSlcclxucHJvamVjdHMuYWRkV2Vlayhub3RlcygnbCcsICdiJywgJ2MnKSlcclxucHJvamVjdHMuYWRkV2Vlayhub3RlcygncCcsICdiJywgJ2MnKSlcclxucHJvamVjdHMuYWRkV2Vlayhub3RlcygneicsICdiJywgJ2MnKSlcclxuXHJcbnByb2plY3RzLmFkZEluZGV4KG5vdGVzKCdkJywgJ2InLCAnYycpKVxyXG5wcm9qZWN0cy5hZGRJbmRleChub3RlcygncycsICdiJywgJ2MnKSlcclxucHJvamVjdHMuYWRkSW5kZXgobm90ZXMoJ2EnLCAnYicsICdjJykpXHJcbnByb2plY3RzLmFkZEluZGV4KG5vdGVzKCd4JywgJ2InLCAnYycpKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIFNob3dpbmcgdGhlIG5vdGVzIG9uIHNjcmVlblxyXG5mdW5jdGlvbiBzaG93Tm90ZXMocHJvamVjdCl7XHJcbiAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXNMaXN0Jyk7XHJcbiAgICBpdGVtcy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBwcm9qZWN0W2ldLmdldFRpdGxlKCk7XHJcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4gYWxlcnQocHJvamVjdFtpXS5nZXRUaXRsZSgpKTtcclxuICAgICAgICBpdGVtLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXHJcbiAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==