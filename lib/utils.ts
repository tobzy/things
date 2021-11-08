export const incrementHexColor = function(color:string, step: number){
  // Convert HEX color to integer
  let colorToInt = parseInt(color.substr(1), 16);

  // Convert step to integer
  let nstep = parseInt('0x'+step, 16);

  if(!isNaN(colorToInt) && !isNaN(nstep)){
    colorToInt += nstep; // Increment integer with step
    var ncolor = colorToInt.toString(16); // Convert back integer to HEX
    ncolor = '#' + (new Array(7-ncolor.length).join('0')) + ncolor;   // Left pad "0" to make HEX look like a color
    if(/^#[0-9a-f]{6}$/i.test(ncolor)){  // Make sure that HEX is a valid color
      return ncolor;
    }
  }
  return color;
};