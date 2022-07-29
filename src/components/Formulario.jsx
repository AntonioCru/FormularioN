import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/StylesFomulario.module.css";
import { useForm } from "react-hook-form";

const Formulario = () => {
    const [posts, setPosts] = useState([]);

  const {
    register,
    formState: { errors }, 
    handleSubmit
  } = useForm();

  const [Entradas, setEntradas] = useState([]);

  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);


  const onSubmit = (data, e) => {
    // console.log(data);
    setEntradas([...Entradas, data]);
    e.target.reset();
    addPosts(Entradas);
  };

  const addPosts = async (entradas)=>{
      await fetch('http://desarrollovan-tis.dedyn.io:4030/RegisterProspect',{
          method: 'POST',
          body: JSON.stringify({
              name: entradas.nombre,
              email: entradas.email,
              phone: entradas.telefono,
              idState: Math.floor(Math.random()*10),
              suburb: entradas.municipio,
              comments: entradas.comentarios
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
            // alert('Enviado');
          console.log(data);
      })
      .catch((err)=>{
          console.log(err.message);
        //   alert('Error de envio');
      })
  }

  return (
      <form 
        className="col-md-12"
        id="formulario"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-1 col-12">
          <h1 className={styles.H1}>Formulario Registro</h1>

          <input
        //   name= nombre''
            // value={Entradas.nombre}
            type="text"
            className="form-control"
            id="caja-nombre"
            placeholder="Nombre*"
            {...register("nombre", {
              required: true,
              maxLength: 45,
            })}
          />
          {errors.nombre?.type === "required" && (
            <span className="text-danger text-small d-block mb-2">
              El nombre es requerido
            </span>
          )}
          {errors.nombre?.type === "maxLength" && (
            <span className="text-danger text-small d-block mb-2">
              Caracteres maximo 45
            </span>
          )}
        </div>

        <div className="p-1 col-12">
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input
            // value={Entradas.email}
              type="email"
              className="form-control"
              id="caja-email"
              placeholder="Email*"
              {...register("email", {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                required: true,
              })}
            />
          </div>
          {errors.email?.type === "pattern" && (
            <span className="text-danger text-small d-block mb-2">
              Correo no valido
            </span>
          )}
          {errors.email?.type === "required" && (
            <span className="text-danger text-small d-block mb-2">
              Correo Requerido
            </span>
          )}
        </div>

        <div className="p-1 col-12">
          <input
        //   value={Entradas.telefono}
            type="number"
            className="form-control"
            id="caja-telefono"
            placeholder="Telefono*"
            {...register("telefono", {
              required: true,
              maxLength: 12,
              minLength: 10,
            })}
          />
          {errors.telefono?.type === "required" && (
            <span className="text-danger text-small d-block mb-2">
              Telefono Requerido
            </span>
          )}
          {errors.telefono?.type === "maxLength" && (
            <span className="text-danger text-small d-block mb-2">
              Maximo 12 digitos
            </span>
          )}
          {errors.telefono?.type === "minLength" && (
            <span className="text-danger text-small d-block mb-2">
              Minimo 10 digitos
            </span>
          )}
        </div>

        <div className="p-1 col-12">
          <div>
            <select
            // value={Entradas.comboselect}
              className="form-select"
              id="combo-estados"
              {...register("comboselect", {
                required: true,
              })}
            >
              <option value="">Estado*...</option>
              <option value="Aguascalientes">Aguascalientes</option>
              <option value="Baja California">Baja California</option>
              <option value="Baja California Sur">Baja California Sur</option>
              <option value="Campeche">Campeche</option>
              <option value="Chiapas">Chiapas</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="CDMX">Ciudad de México</option>
              <option value="Coahuila">Coahuila</option>
              <option value="Colima">Colima</option>
              <option value="Durango">Durango</option>
              <option value="Estado de México">Estado de México</option>
              <option value="Guanajuato">Guanajuato</option>
              <option value="Guerrero">Guerrero</option>
              <option value="Hidalgo">Hidalgo</option>
              <option value="Jalisco">Jalisco</option>
              <option value="Michoacán">Michoacán</option>
              <option value="Morelos">Morelos</option>
              <option value="Nayarit">Nayarit</option>
              <option value="Nuevo León">Nuevo León</option>
              <option value="Oaxaca">Oaxaca</option>
              <option value="Puebla">Puebla</option>
              <option value="Querétaro">Querétaro</option>
              <option value="Quintana Roo">Quintana Roo</option>
              <option value="San Luis Potosí">San Luis Potosí</option>
              <option value="Sinaloa">Sinaloa</option>
              <option value="Sonora">Sonora</option>
              <option value="Tabasco">Tabasco</option>
              <option value="Tamaulipas">Tamaulipas</option>
              <option value="Tlaxcala">Tlaxcala</option>
              <option value="Veracruz">Veracruz</option>
              <option value="Yucatán">Yucatán</option>
              <option value="Zacatecas">Zacatecas</option>
            </select>
          </div>
          {errors.comboselect?.type === "required" && (
            <span className="text-danger text-small d-block mb-2">
              El Estado es requerido
            </span>
          )}
        </div>

        <div className="p-1 col-12">
          <input
        //   value={Entradas.municipio}
            type="text"
            className="form-control"
            id="caja-municipio"
            placeholder="Municipio"
            //   maxLength="45"
            {...register("municipio", {
              required: true,
              maxLength: 45,
              minLength: 1,
            })}
          />
          {errors.municipio?.type === "required" && (
            <span className="text-danger text-small d-block mb-2">
              El Municipio es requerido
            </span>
          )}
          {errors.municipio?.type === "maxLength" && (
            <span className="text-danger text-small d-block mb-2">
              Maximo 45 caracteres
            </span>
          )}
          {errors.municipio?.type === "minLength" && (
            <span className="text-danger text-small d-block mb-2">
              Minimo 1 caracteres
            </span>
          )}
        </div>

        <div className="p-1 col-12">
          <input
        //   value={Entradas.colonia}
            type="text"
            className="form-control"
            id="caja-colonia"
            placeholder="Colonia"
            {...register("colonia", {
              maxLength: 55,
            })}
          />
          {errors.colonia?.type === "maxLength" && (
            <span className="text-danger text-small d-block mb-2">
              Maximo 55 caracteres
            </span>
          )}
        </div>

        <div className="p-1 col-12">
          <textarea
        //   value={Entradas.comentarios}
            className="form-control"
            id="tArea-comentarios"
            aria-label="width textarea"
            placeholder="Comentarios"
            rows="3"
            //   maxLength="120"
            {...register("comentarios", {
              maxLength: 120,
            })}
          ></textarea>
          {errors.comentarios?.type === "maxLength" && (
            <span className="text-danger text-small d-block mb-2">
              Maximo 55 caracteres
            </span>
          )}
        </div>

        <div className="p-1 col-12">
          <input
            type="submit"
            className="btn btn-primary"
            id="boton-enviar"
            value="Enviar Datos"
          />
        </div>
        <ul className={styles.Ul}>
            {/* {
                Entradas.map(item =>
                    <li >{item.nombre} - {item.email} - {item.telefono} - {item.comboselect} - {item.municipio} - {item.colonia} - {item.comentarios}</li>
                )
            } */}
      </ul>
      </form>
  );
};

export default Formulario;
