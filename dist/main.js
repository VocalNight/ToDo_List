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
    let name = projectName;

    const getNotes = () => notes;
    const getProjectName = () => name;

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
        return custom.find(project => project.getProjectName() === projectName);
    }

    const getProjects = () => custom;

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
        getCustom, getIndex, getToday, getWeek, addCustomProject, addIndex, addToday, addWeek, getProjects
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




const projects = _projects__WEBPACK_IMPORTED_MODULE_1__["default"].Projects();
let currentProject = '';

//Divs


//Buttons

const inboxBtn = document.querySelector('#inboxBtn')
const todayBtn = document.querySelector('#todayBtn')
const weekBtn = document.querySelector('#weekBtn')

inboxBtn.addEventListener('click', () => showNotes(projects.getIndex()))

todayBtn.addEventListener('click', () => showNotes(projects.getToday()));

weekBtn.addEventListener('click', () => showNotes(projects.getWeek()));

//form buttons

const formPopup = document.querySelector('#formPopup');

const submitNoteBtn = document.querySelector('#submitNote');

const submitProjectBtn = document.querySelector('#submitProject');

const noteForm = document.querySelector('#noteAddition');

const projectForm = document.querySelector('#projectAddition');

const addProjectBtn = document.querySelector('#addStuff');

const formCancelBtn = document.querySelector('#formCancel');

const selectNoteForm = document.querySelector('#selectnoteform');

const selectProjectForm = document.querySelector('#selectprojectform');

selectNoteForm.addEventListener('click', () => showNoteForm())

selectProjectForm.addEventListener('click', () => showProjectForm())

formCancelBtn.addEventListener('click', () => hideForm())

addProjectBtn.addEventListener('click', () => showForm());

submitProjectBtn.addEventListener('click', () => createProject())

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
function showNotes(notes){
    let items = document.querySelector('.notesList');
    items.innerHTML = '';

    for (let i = 0; i < notes.length; i++ ) {
        let item = document.createElement("li");
        item.innerHTML = notes[i].getTitle();
        item.onclick = () => alert(notes[i].getTitle());
        item.style.cursor = "pointer"
        items.appendChild(item);
    }

}

function showCustomNotes(project) {

    let items = document.querySelector('.notesList');
    items.innerHTML = '';
    let notes = project.getNotes();

    for (let i = 0; i < notes.length; i++ ) {
        let item = document.createElement("li");
        item.innerHTML = notes[i].getTitle();
        item.onclick = () => alert(notes[i].getTitle());
        item.style.cursor = "pointer"
        items.appendChild(item);
    }

    currentProject = project;
    console.log(currentProject.getProjectName());

}

function showForm() {
    
    formPopup.style.display = 'flex'
}

function hideForm() {

    formPopup.style.display = 'none'
}


function showNoteForm() {

    noteForm.style.display = 'block'
    projectForm.style.display = 'none'

}

function showProjectForm() {
    noteForm.style.display = 'none'
    projectForm.style.display = 'block'
}


function createProject() {
    const projectName = document.querySelector('#projecttitle');

    projects.addCustomProject(_projects__WEBPACK_IMPORTED_MODULE_1__["default"].Project(projectName.value));

    
    projectName.value = '';
    
    showProjects()
}

function showProjects() {

    let items = document.querySelector('#projectList');
    items.innerHTML = '';


    for (let i = 0; i < projects.getProjects().length; i++) {

        let item = document.createElement("li");

        let projectName = projects.getProjects()[i].getProjectName();

        item.innerHTML = projects.getProjects()[i].getProjectName();

        item.addEventListener('click', () => showCustomNotes(projects.getCustom(projectName)));


        item.style.cursor = "pointer"
        items.appendChild(item);
    }



}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b19saXN0Ly4vc3JjL25vdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOb3RlID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcclxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xyXG5cclxuICAgIHJldHVybiB7Z2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXRQcmlvcml0eX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcclxuIiwiY29uc3QgUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgbGV0IG5vdGVzID0gW107XHJcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xyXG5cclxuICAgIGNvbnN0IGdldE5vdGVzID0gKCkgPT4gbm90ZXM7XHJcbiAgICBjb25zdCBnZXRQcm9qZWN0TmFtZSA9ICgpID0+IG5hbWU7XHJcblxyXG4gICAgY29uc3QgYWRkTm90ZXMgPSAobm90ZSkgPT4ge1xyXG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXROb3RlcywgYWRkTm90ZXMsIGdldFByb2plY3ROYW1lXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGxldCBpbmRleCA9IFtdO1xyXG4gICAgbGV0IHRvZGF5ID0gW107XHJcbiAgICBsZXQgd2VlayA9IFtdO1xyXG4gICAgbGV0IGN1c3RvbSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGdldEluZGV4ID0gKCkgPT4gaW5kZXg7XHJcbiAgICBjb25zdCBnZXRUb2RheSA9ICgpID0+IHRvZGF5O1xyXG4gICAgY29uc3QgZ2V0V2VlayA9ICgpID0+IHdlZWs7XHJcblxyXG5cclxuICAgIGNvbnN0IGdldEN1c3RvbSA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjdXN0b20uZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0UHJvamVjdE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gY3VzdG9tO1xyXG5cclxuICAgIGNvbnN0IGFkZEN1c3RvbVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGN1c3RvbS5wdXNoKHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEluZGV4ID0gKG5vdGUpID0+IHtcclxuICAgICAgICBpbmRleC5wdXNoKG5vdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFRvZGF5ID0gKG5vdGUpID0+IHtcclxuICAgICAgICB0b2RheS5wdXNoKG5vdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFdlZWsgPSAobm90ZSkgPT4ge1xyXG4gICAgICAgIHdlZWsucHVzaChub3RlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEN1c3RvbSwgZ2V0SW5kZXgsIGdldFRvZGF5LCBnZXRXZWVrLCBhZGRDdXN0b21Qcm9qZWN0LCBhZGRJbmRleCwgYWRkVG9kYXksIGFkZFdlZWssIGdldFByb2plY3RzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtQcm9qZWN0LCBQcm9qZWN0c31cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbm90ZXMgZnJvbSAnLi9ub3RlJ1xyXG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0cydcclxuXHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IHByb2plY3RNYW5hZ2VyLlByb2plY3RzKCk7XHJcbmxldCBjdXJyZW50UHJvamVjdCA9ICcnO1xyXG5cclxuLy9EaXZzXHJcblxyXG5cclxuLy9CdXR0b25zXHJcblxyXG5jb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmJveEJ0bicpXHJcbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5QnRuJylcclxuY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrQnRuJylcclxuXHJcbmluYm94QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd05vdGVzKHByb2plY3RzLmdldEluZGV4KCkpKVxyXG5cclxudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93Tm90ZXMocHJvamVjdHMuZ2V0VG9kYXkoKSkpO1xyXG5cclxud2Vla0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dOb3Rlcyhwcm9qZWN0cy5nZXRXZWVrKCkpKTtcclxuXHJcbi8vZm9ybSBidXR0b25zXHJcblxyXG5jb25zdCBmb3JtUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVBvcHVwJyk7XHJcblxyXG5jb25zdCBzdWJtaXROb3RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdE5vdGUnKTtcclxuXHJcbmNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0UHJvamVjdCcpO1xyXG5cclxuY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZUFkZGl0aW9uJyk7XHJcblxyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QWRkaXRpb24nKTtcclxuXHJcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkU3R1ZmYnKTtcclxuXHJcbmNvbnN0IGZvcm1DYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybUNhbmNlbCcpO1xyXG5cclxuY29uc3Qgc2VsZWN0Tm90ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0bm90ZWZvcm0nKTtcclxuXHJcbmNvbnN0IHNlbGVjdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdHByb2plY3Rmb3JtJyk7XHJcblxyXG5zZWxlY3ROb3RlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dOb3RlRm9ybSgpKVxyXG5cclxuc2VsZWN0UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93UHJvamVjdEZvcm0oKSlcclxuXHJcbmZvcm1DYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoaWRlRm9ybSgpKVxyXG5cclxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dGb3JtKCkpO1xyXG5cclxuc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZVByb2plY3QoKSlcclxuXHJcbi8vVGVzdGluZyBjcmVhdGlvbiBvZiBub3RlXHJcblxyXG5wcm9qZWN0cy5hZGRUb2RheShub3RlcygnYScsICdiJywgJ2MnKSlcclxucHJvamVjdHMuYWRkVG9kYXkobm90ZXMoJ2QnLCAnYicsICdjJykpXHJcbnByb2plY3RzLmFkZFRvZGF5KG5vdGVzKCdmJywgJ2InLCAnYycpKVxyXG5wcm9qZWN0cy5hZGRUb2RheShub3RlcygnZycsICdiJywgJ2MnKSlcclxuXHJcbnByb2plY3RzLmFkZFdlZWsobm90ZXMoJ24nLCAnYicsICdjJykpXHJcbnByb2plY3RzLmFkZFdlZWsobm90ZXMoJ2wnLCAnYicsICdjJykpXHJcbnByb2plY3RzLmFkZFdlZWsobm90ZXMoJ3AnLCAnYicsICdjJykpXHJcbnByb2plY3RzLmFkZFdlZWsobm90ZXMoJ3onLCAnYicsICdjJykpXHJcblxyXG5wcm9qZWN0cy5hZGRJbmRleChub3RlcygnZCcsICdiJywgJ2MnKSlcclxucHJvamVjdHMuYWRkSW5kZXgobm90ZXMoJ3MnLCAnYicsICdjJykpXHJcbnByb2plY3RzLmFkZEluZGV4KG5vdGVzKCdhJywgJ2InLCAnYycpKVxyXG5wcm9qZWN0cy5hZGRJbmRleChub3RlcygneCcsICdiJywgJ2MnKSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBTaG93aW5nIHRoZSBub3RlcyBvbiBzY3JlZW5cclxuZnVuY3Rpb24gc2hvd05vdGVzKG5vdGVzKXtcclxuICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlc0xpc3QnKTtcclxuICAgIGl0ZW1zLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm90ZXMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBub3Rlc1tpXS5nZXRUaXRsZSgpO1xyXG4gICAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IGFsZXJ0KG5vdGVzW2ldLmdldFRpdGxlKCkpO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCJcclxuICAgICAgICBpdGVtcy5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDdXN0b21Ob3Rlcyhwcm9qZWN0KSB7XHJcblxyXG4gICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGVzTGlzdCcpO1xyXG4gICAgaXRlbXMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBsZXQgbm90ZXMgPSBwcm9qZWN0LmdldE5vdGVzKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub3Rlcy5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBpdGVtLmlubmVySFRNTCA9IG5vdGVzW2ldLmdldFRpdGxlKCk7XHJcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4gYWxlcnQobm90ZXNbaV0uZ2V0VGl0bGUoKSk7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIlxyXG4gICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LmdldFByb2plY3ROYW1lKCkpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XHJcbiAgICBcclxuICAgIGZvcm1Qb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVGb3JtKCkge1xyXG5cclxuICAgIGZvcm1Qb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93Tm90ZUZvcm0oKSB7XHJcblxyXG4gICAgbm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0Rm9ybSgpIHtcclxuICAgIG5vdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHRpdGxlJyk7XHJcblxyXG4gICAgcHJvamVjdHMuYWRkQ3VzdG9tUHJvamVjdChwcm9qZWN0TWFuYWdlci5Qcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKSk7XHJcblxyXG4gICAgXHJcbiAgICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgXHJcbiAgICBzaG93UHJvamVjdHMoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7XHJcblxyXG4gICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RMaXN0Jyk7XHJcbiAgICBpdGVtcy5pbm5lckhUTUwgPSAnJztcclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5nZXRQcm9qZWN0cygpLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0cy5nZXRQcm9qZWN0cygpW2ldLmdldFByb2plY3ROYW1lKCk7XHJcblxyXG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gcHJvamVjdHMuZ2V0UHJvamVjdHMoKVtpXS5nZXRQcm9qZWN0TmFtZSgpO1xyXG5cclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd0N1c3RvbU5vdGVzKHByb2plY3RzLmdldEN1c3RvbShwcm9qZWN0TmFtZSkpKTtcclxuXHJcblxyXG4gICAgICAgIGl0ZW0uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCJcclxuICAgICAgICBpdGVtcy5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=