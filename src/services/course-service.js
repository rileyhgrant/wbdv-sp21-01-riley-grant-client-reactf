const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001661897/courses";



const findAllCourses = () => 
    fetch( COURSES_URL )
        .then( response => response.json() );
// break vs-code auto indentation



const createCourse = ( course ) => 
    fetch( COURSES_URL, {
        method: 'POST',
        body: JSON.stringify( course ),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then( response => response.json() );
// break vs-code auto indentation



const deleteCourse = ( courseID ) => 
    fetch( `${COURSES_URL}/${courseID}`, {
        method: 'DELETE'
    })
    .then( response => response.json() );
// break vs-code auto indentation



const updateCourse = ( course, courseID ) =>
    fetch( `${COURSES_URL}/${courseID}`, {
        method: 'PUT',
        body: JSON.stringify( course ),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then( response => response.json() );
// break vs-code auto indentation


const api = {
    findAllCourses: findAllCourses,
    deleteCourse: deleteCourse,
    createCourse: createCourse,
    updateCourse: updateCourse
}

/* export the default object that includes all of the functions*/
export default api;