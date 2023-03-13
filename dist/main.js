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

    const addNote = (note) => {
        notes.push(note);
    }

    return {
        getNotes, addNote, getProjectName
    }
}


const Projects = () => {
    let index = Project('index');
    let today = Project('today');
    let week = Project('week');
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
        index.addNote(note);
    }

    const addToday = (note) => {
        today.addNote(note);
    }

    const addWeek = (note) => {
        week.addNote(note);
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

//Notes form buttons

const submitNoteBtn = document.querySelector('#submitNote');

submitNoteBtn.addEventListener('click', () => addNote());


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

    let notes = project.getNotes();

    for (let i = 0; i < notes.length; i++ ) {
        let item = document.createElement("li");
        item.innerHTML = notes[i].getTitle();
        item.onclick = () => alert(notes[i].getTitle());
        item.style.cursor = "pointer"
        items.appendChild(item);
    }

    currentProject = project;

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


function addNote(project) {
    let noteTitle = document.querySelector('#notetitle');

    let noteDescription = document.querySelector('#description');

    let noteUrgency = document.querySelector('#urgency');

    let note = (0,_note__WEBPACK_IMPORTED_MODULE_0__["default"])(noteTitle.value, noteDescription.value, noteUrgency.value)

    currentProject.addNote(note);

}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9ub3RlLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTm90ZSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XHJcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcclxuXHJcbiAgICByZXR1cm4ge2dldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0UHJpb3JpdHl9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGU7XHJcbiIsImNvbnN0IFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgIGxldCBub3RlcyA9IFtdO1xyXG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcclxuXHJcbiAgICBjb25zdCBnZXROb3RlcyA9ICgpID0+IG5vdGVzO1xyXG4gICAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSAoKSA9PiBuYW1lO1xyXG5cclxuICAgIGNvbnN0IGFkZE5vdGUgPSAobm90ZSkgPT4ge1xyXG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXROb3RlcywgYWRkTm90ZSwgZ2V0UHJvamVjdE5hbWVcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gUHJvamVjdCgnaW5kZXgnKTtcclxuICAgIGxldCB0b2RheSA9IFByb2plY3QoJ3RvZGF5Jyk7XHJcbiAgICBsZXQgd2VlayA9IFByb2plY3QoJ3dlZWsnKTtcclxuICAgIGxldCBjdXN0b20gPSBbXTtcclxuXHJcbiAgICBjb25zdCBnZXRJbmRleCA9ICgpID0+IGluZGV4O1xyXG4gICAgY29uc3QgZ2V0VG9kYXkgPSAoKSA9PiB0b2RheTtcclxuICAgIGNvbnN0IGdldFdlZWsgPSAoKSA9PiB3ZWVrO1xyXG5cclxuXHJcbiAgICBjb25zdCBnZXRDdXN0b20gPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gY3VzdG9tLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldFByb2plY3ROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IGN1c3RvbTtcclxuXHJcbiAgICBjb25zdCBhZGRDdXN0b21Qcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBjdXN0b20ucHVzaChwcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRJbmRleCA9IChub3RlKSA9PiB7XHJcbiAgICAgICAgaW5kZXguYWRkTm90ZShub3RlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRUb2RheSA9IChub3RlKSA9PiB7XHJcbiAgICAgICAgdG9kYXkuYWRkTm90ZShub3RlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRXZWVrID0gKG5vdGUpID0+IHtcclxuICAgICAgICB3ZWVrLmFkZE5vdGUobm90ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRDdXN0b20sIGdldEluZGV4LCBnZXRUb2RheSwgZ2V0V2VlaywgYWRkQ3VzdG9tUHJvamVjdCwgYWRkSW5kZXgsIGFkZFRvZGF5LCBhZGRXZWVrLCBnZXRQcm9qZWN0c1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7UHJvamVjdCwgUHJvamVjdHN9XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG5vdGVzIGZyb20gJy4vbm90ZSdcclxuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdHMnXHJcblxyXG5cclxuY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0cygpO1xyXG5sZXQgY3VycmVudFByb2plY3QgPSAnJztcclxuXHJcbi8vRGl2c1xyXG5cclxuXHJcbi8vQnV0dG9uc1xyXG5cclxuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5ib3hCdG4nKVxyXG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheUJ0bicpXHJcbmNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2Vla0J0bicpXHJcblxyXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dOb3Rlcyhwcm9qZWN0cy5nZXRJbmRleCgpKSlcclxuXHJcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd05vdGVzKHByb2plY3RzLmdldFRvZGF5KCkpKTtcclxuXHJcbndlZWtCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93Tm90ZXMocHJvamVjdHMuZ2V0V2VlaygpKSk7XHJcblxyXG4vL2Zvcm0gYnV0dG9uc1xyXG5cclxuY29uc3QgZm9ybVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1Qb3B1cCcpO1xyXG5cclxuXHJcblxyXG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdFByb2plY3QnKTtcclxuXHJcbmNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVBZGRpdGlvbicpO1xyXG5cclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEFkZGl0aW9uJyk7XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFN0dWZmJyk7XHJcblxyXG5jb25zdCBmb3JtQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1DYW5jZWwnKTtcclxuXHJcbmNvbnN0IHNlbGVjdE5vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdG5vdGVmb3JtJyk7XHJcblxyXG5jb25zdCBzZWxlY3RQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3Rwcm9qZWN0Zm9ybScpO1xyXG5cclxuc2VsZWN0Tm90ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93Tm90ZUZvcm0oKSlcclxuXHJcbnNlbGVjdFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd1Byb2plY3RGb3JtKCkpXHJcblxyXG5mb3JtQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGlkZUZvcm0oKSlcclxuXHJcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93Rm9ybSgpKTtcclxuXHJcbnN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVQcm9qZWN0KCkpXHJcblxyXG4vL05vdGVzIGZvcm0gYnV0dG9uc1xyXG5cclxuY29uc3Qgc3VibWl0Tm90ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXROb3RlJyk7XHJcblxyXG5zdWJtaXROb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkTm90ZSgpKTtcclxuXHJcblxyXG4vL1Rlc3RpbmcgY3JlYXRpb24gb2Ygbm90ZVxyXG5cclxucHJvamVjdHMuYWRkVG9kYXkobm90ZXMoJ2EnLCAnYicsICdjJykpXHJcbnByb2plY3RzLmFkZFRvZGF5KG5vdGVzKCdkJywgJ2InLCAnYycpKVxyXG5wcm9qZWN0cy5hZGRUb2RheShub3RlcygnZicsICdiJywgJ2MnKSlcclxucHJvamVjdHMuYWRkVG9kYXkobm90ZXMoJ2cnLCAnYicsICdjJykpXHJcblxyXG5wcm9qZWN0cy5hZGRXZWVrKG5vdGVzKCduJywgJ2InLCAnYycpKVxyXG5wcm9qZWN0cy5hZGRXZWVrKG5vdGVzKCdsJywgJ2InLCAnYycpKVxyXG5wcm9qZWN0cy5hZGRXZWVrKG5vdGVzKCdwJywgJ2InLCAnYycpKVxyXG5wcm9qZWN0cy5hZGRXZWVrKG5vdGVzKCd6JywgJ2InLCAnYycpKVxyXG5cclxucHJvamVjdHMuYWRkSW5kZXgobm90ZXMoJ2QnLCAnYicsICdjJykpXHJcbnByb2plY3RzLmFkZEluZGV4KG5vdGVzKCdzJywgJ2InLCAnYycpKVxyXG5wcm9qZWN0cy5hZGRJbmRleChub3RlcygnYScsICdiJywgJ2MnKSlcclxucHJvamVjdHMuYWRkSW5kZXgobm90ZXMoJ3gnLCAnYicsICdjJykpXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gU2hvd2luZyB0aGUgbm90ZXMgb24gc2NyZWVuXHJcbmZ1bmN0aW9uIHNob3dOb3Rlcyhwcm9qZWN0KXtcclxuICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Rlc0xpc3QnKTtcclxuICAgIGl0ZW1zLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGxldCBub3RlcyA9IHByb2plY3QuZ2V0Tm90ZXMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVzLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gbm90ZXNbaV0uZ2V0VGl0bGUoKTtcclxuICAgICAgICBpdGVtLm9uY2xpY2sgPSAoKSA9PiBhbGVydChub3Rlc1tpXS5nZXRUaXRsZSgpKTtcclxuICAgICAgICBpdGVtLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXHJcbiAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0N1c3RvbU5vdGVzKHByb2plY3QpIHtcclxuXHJcbiAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXNMaXN0Jyk7XHJcbiAgICBpdGVtcy5pbm5lckhUTUwgPSAnJztcclxuICAgIGxldCBub3RlcyA9IHByb2plY3QuZ2V0Tm90ZXMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVzLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gbm90ZXNbaV0uZ2V0VGl0bGUoKTtcclxuICAgICAgICBpdGVtLm9uY2xpY2sgPSAoKSA9PiBhbGVydChub3Rlc1tpXS5nZXRUaXRsZSgpKTtcclxuICAgICAgICBpdGVtLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiXHJcbiAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcclxuICAgIFxyXG4gICAgZm9ybVBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUZvcm0oKSB7XHJcblxyXG4gICAgZm9ybVBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dOb3RlRm9ybSgpIHtcclxuXHJcbiAgICBub3RlRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RGb3JtKCkge1xyXG4gICAgbm90ZUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0dGl0bGUnKTtcclxuXHJcbiAgICBwcm9qZWN0cy5hZGRDdXN0b21Qcm9qZWN0KHByb2plY3RNYW5hZ2VyLlByb2plY3QocHJvamVjdE5hbWUudmFsdWUpKTtcclxuXHJcbiAgICBcclxuICAgIHByb2plY3ROYW1lLnZhbHVlID0gJyc7XHJcbiAgICBcclxuICAgIHNob3dQcm9qZWN0cygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcclxuXHJcbiAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcclxuICAgIGl0ZW1zLmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmdldFByb2plY3RzKCkubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3RzLmdldFByb2plY3RzKClbaV0uZ2V0UHJvamVjdE5hbWUoKTtcclxuXHJcbiAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBwcm9qZWN0cy5nZXRQcm9qZWN0cygpW2ldLmdldFByb2plY3ROYW1lKCk7XHJcblxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93Q3VzdG9tTm90ZXMocHJvamVjdHMuZ2V0Q3VzdG9tKHByb2plY3ROYW1lKSkpO1xyXG5cclxuXHJcbiAgICAgICAgaXRlbS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIlxyXG4gICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTm90ZShwcm9qZWN0KSB7XHJcbiAgICBsZXQgbm90ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGV0aXRsZScpO1xyXG5cclxuICAgIGxldCBub3RlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICBsZXQgbm90ZVVyZ2VuY3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXJnZW5jeScpO1xyXG5cclxuICAgIGxldCBub3RlID0gbm90ZXMobm90ZVRpdGxlLnZhbHVlLCBub3RlRGVzY3JpcHRpb24udmFsdWUsIG5vdGVVcmdlbmN5LnZhbHVlKVxyXG5cclxuICAgIGN1cnJlbnRQcm9qZWN0LmFkZE5vdGUobm90ZSk7XHJcblxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==