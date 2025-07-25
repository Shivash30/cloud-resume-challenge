window.addEventListener('DOMContentLoaded', (event) => {
    getVisitorCount();
})

const functionApi = '';

const getVisitorCount = () =>{
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json();
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementsByiD("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}