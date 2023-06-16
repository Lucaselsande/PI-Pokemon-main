const validationTypes = (typ) => {
    let arrayTypes = [];
let errors = {};

if (typ[1] && typ[1] !== 'none') {
  arrayTypes.push(typ[1]);

  if (typ[2] && typ[2] !== typ[1]) {
    arrayTypes.push(typ[2]);
  } else if (typ[2]) {
    errors[1] = `el tipo ${typ[2]} está duplicado`;
  }

  if (typ[3] && ![typ[1], typ[2]].includes(typ[3])) {
    arrayTypes.push(typ[3]);
  } else if (typ[3]) {
    errors[2] = `el tipo ${typ[3]} está duplicado`;
  }

  if (typ[4] && ![typ[1], typ[2], typ[3]].includes(typ[4])) {
    arrayTypes.push(typ[4]);
  } else if (typ[4]) {
    errors[3] = `el tipo ${typ[4]} está duplicado`;
  }
} else {
  errors[0] = `tipo ${typ[1]} no válido`;
}

    return {errors,arrayTypes}
    

}
export default validationTypes