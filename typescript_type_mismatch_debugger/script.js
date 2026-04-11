function analyze(){
let input=document.getElementById('input').value||"";
let insights="";

// coverage (very basic heuristic)
if(input.includes(":")){
  insights += "Typed variables detected.<br>";
}else{
  insights += "Low type coverage.<br>";
}

// strict mode
if(input.includes("strict")){
  insights += "Strict mode likely enabled.<br>";
}else{
  insights += "Consider enabling strict mode.<br>";
}

// unused types
if(input.includes("type") && !input.includes("use")){
  insights += "Possible unused type definitions.<br>";
}

// mismatch detection
if(input.includes("any")){
  insights += "Usage of 'any' detected. Potential type mismatch risk.<br>";
}

if(!insights) insights="No major issues detected.";

document.getElementById('result').innerHTML =
"<b>Analysis:</b><br>"+insights;
}
