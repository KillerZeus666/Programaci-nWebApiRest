let xmlhttp = new XMLHttpRequest()
xmlhttp.open("GET", "https://www.datos.gov.co/resource/gdxc-w37w.json")
xmlhttp.send()

xmlhttp.onload = () => {
  const myObj = JSON.parse(xmlhttp.response)
  var i
  let table =
    " <tr><th>Código</th><th>Depto</th><th>Municipio</th><th>Tipo</th></tr>"
  for (i = 0; i < myObj.length; i++) {
    table +=
      "<tr><td>" +
      myObj[i].cod_mpio +
      "</td><td>" +
      myObj[i].dpto +
      "</td><td>" +
      myObj[i].nom_mpio +
      "</td><td>" +
      myObj[i].tipo_municipio +
      "</td><tr>"
  }
  document.getElementById("mitabla").innerHTML = table
}
