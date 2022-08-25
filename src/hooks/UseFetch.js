import { useState } from "react";
import { useEffect } from "react";

const UseFetch = (Entradas2) => {

    const [posts, setPosts] = useState([]);

    const [Entradas, setEntradas] = useState(Entradas2);

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido); 
    
   

    useEffect(() => {
      
        if (Entradas!=null || Entradas!= 'Undefined') {
            (async(Entradas)=>{
                await fetch('http://desarrollovan-tis.dedyn.io:4030/RegisterProspect',{
                    method: 'POST',
                    body: JSON.stringify({
                        name: Entradas.nombre,
                        email: Entradas.email,
                        phone: Entradas.telefono,
                        idState: Math.floor(Math.random()*10),
                        suburb: Entradas.municipio,
                        comments: Entradas.comentarios
                    }),
                        headers: {
                          'Content-type': 'application/json; charset=utf-8',
                          'Transfer-Encoding': 'chunked',
                          'Server': 'Microsoft-IIS/10.0',
                          'X-Powered-By': 'ASP.NET',
                          // 'Date': 'Fri, 29 Jul 2022 14:53:07 GMT'
                          'Date': hoy.toUTCString()
                        },
                })
                .then((response)=>response.json())
                .then((data)=>{
                    setPosts((posts)=>[data, ...posts]);
                    setEntradas('');
                      alert('Enviado');
                    console.log(data);
                })
                .catch((err)=>{
                    console.log(err.message);
                    alert('Error de envio');
                })
            })();
        } else {
            console.log('no hay datos');
        }

    }, [Entradas])
    

}
 
export default UseFetch;