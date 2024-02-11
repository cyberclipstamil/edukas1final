function downloadJSON() {
    // Retrieve data from localStorage
    var userData = JSON.parse(localStorage.getItem('userArray'));
    
    // Download JSON file
    var jsonData = JSON.stringify(userData, null, 2);
    var blob = new Blob([jsonData], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    
    var a = document.createElement('a');
    a.href = url;
    a.download = 'userdata.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function deleteJSON() {
    // Remove data from localStorage
    localStorage.removeItem('userArray');
    alert('JSON data deleted successfully!');
}


