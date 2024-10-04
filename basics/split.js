console.log(document);

// Function to get file extension
function getFileExtension(filename) {
  // Split the filename by dot and get the last element
  const parts = filename.split('.');
  // Return the last element if it exists, otherwise return an empty string
  return parts.length > 1 ? parts[parts.length - 1] : '';
}

// Example usage
const filename = 'example.txt';
const extension = getFileExtension(filename);
console.log(`File extension: ${extension}`);

// You can test with more examples:
console.log(getFileExtension('image.jpg'));
console.log(getFileExtension('document.pdf'));
console.log(getFileExtension('script.js'));
console.log(getFileExtension('file_without_extension'));

// split method

function splitMethod(wo){
    let newP = wo.split(",");
    console.log(newP)
}

splitMethod("m,amamm")




