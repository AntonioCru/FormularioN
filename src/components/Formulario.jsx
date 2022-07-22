import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/StylesFomulario.module.css";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [Entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...Entradas, data]);
    e.target.reset();
  };

  return (
      <form
        className="col-md-12"
        id="formulario"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-1 col-12">
          <h1 className={styles.H1}>Formulario Registro</h1>

          <input
            type="text"
            //   name="nombre"
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
              Minimo 12 digitos
            </span>
          )}
        </div>

        <div className="p-1 col-12">
          <div>
            <select
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
            {
                Entradas.map(item =>
                    <li >{item.nombre} - {item.email} - {item.telefono} - {item.comboselect} - {item.municipio} - {item.colonia} - {item.comentarios}</li>
                )
            }
      </ul>
      </form>
  );
};

export default Formulario;
