module.exports = function rnaTranscription(DNAstring){
  if(typeof DNAstring !== 'string'){
    return "gimme dat DNA!"
  }
  DNAstring = DNAstring.toUpperCase();
  const matchDNA = DNAstring.match(/[GATC]/g);
  
  if( !matchDNA || matchDNA.length !== DNAstring.length){
    return "bad input"
  }
  //GCTA => CGAU
  let RNAstring = "";
  
  for (let i = 0; i < DNAstring.length; i++) {
    switch (DNAstring[i]) {
      case 'G':
        RNAstring += ('C')
        break;
      case 'C':
        RNAstring += ('G')
        break;
      case 'T':
        RNAstring += ('A')
        break;
      case 'A':
        RNAstring += ('U')
        break;
      default:
        break;
    }
  }
  return RNAstring
}