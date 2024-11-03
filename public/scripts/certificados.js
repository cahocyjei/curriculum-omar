import { dbImages } from "../dbimages/dbImage.js";

const container = document.getElementById('cont-estudios');

export function Certificados(){
  for (let i = 0; i < dbImages.length; i++) {
    const contDiplo = document.createElement('div');
    contDiplo.setAttribute('class', 'cont-diplo');
    const imgDiplo = document.createElement('img');
    imgDiplo.setAttribute('id', 'diplo');
    imgDiplo.src = dbImages[i];
    contDiplo.appendChild(imgDiplo);
    container.appendChild(contDiplo);
  }
}