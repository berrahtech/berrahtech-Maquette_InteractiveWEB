// function telechargerPDF() {
//     var element = document.getElementById('main-cv');
// var opt = {
//   margin:       1,
//   filename:     'myfile.pdf',
//   image:        { type: 'jpeg', quality: 0.98 },
//   html2canvas:  { scale: 2 },
//   jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
// };

// // New Promise-based usage:
// html2pdf().set(opt).from(element).save();
//   }

document.getElementById('generate-pdf-btn').addEventListener('click', function() {
    const element = document.querySelector('#section');
    html2pdf().from(element).save('mon_cv.pdf');
});
const changeColor = (valeur) =>{
 
        document.documentElement.style.setProperty("--couleur",valeur);
    
}
