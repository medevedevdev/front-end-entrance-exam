document.addEventListener('DOMContentLoaded', function () {
  const { jsPDF } = window.jspdf;

  document.getElementById('download').addEventListener('click', function () {
    html2canvas(document.getElementById('app')).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  });
})
