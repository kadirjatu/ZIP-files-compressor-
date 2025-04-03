function compressFiles() {
    // Select files
    let files = document.getElementById("fileInput").files;
    
    if (files.length === 0) {
        alert("Please select files to compress.");
        return;
    }

    // Create a new ZIP instance
    let zip = new JSZip();

    // Loop through files and add them to ZIP
    for (let i = 0; i < files.length; i++) {
        zip.file(files[i].name, files[i]);
    }

    // Generate and download ZIP file
    zip.generateAsync({ type: "blob" }).then(function(content) {
        let a = document.createElement("a");
        a.href = URL.createObjectURL(content);
        a.download = "compressed_files.zip";

        // Append to body and trigger download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}
