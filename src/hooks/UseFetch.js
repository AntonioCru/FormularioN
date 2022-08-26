const UseFetch = (Entradas) => {
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);

  if (Entradas === null) {
    console.log("no hay datos");
  } else if (Entradas !== null) {
    fetch("http://desarrollovan-tis.dedyn.io:4030/RegisterProspect", {
      method: "POST",
      body: JSON.stringify({
        name: Entradas.nombre,
        email: Entradas.email,
        phone: Entradas.telefono,
        idState: Math.floor(Math.random() * 10),
        suburb: Entradas.municipio,
        comments: Entradas.comentarios,
      }),
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=utf-8",
        "Transfer-Encoding": "chunked",
        Server: "Microsoft-IIS/10.0",
        "X-Powered-By": "ASP.NET",
        // 'Date': 'Fri, 29 Jul 2022 14:53:07 GMT'
        date: hoy.toUTCString(),
        "x-powered-by": "ASP.NET ",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Enviado");
        return true;
      })
      .catch((err) => {
        console.log(err.message);
        alert(err);
        return false;
      });
  }
};

export default UseFetch;
