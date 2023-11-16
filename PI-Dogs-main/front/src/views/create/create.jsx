import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewDog, getAllTemperaments } from "../../redux/actions";
import Nav from "../../components/navbar/NavBar";
import "./create.css";

function Create() {
  const dispatch = useDispatch();
  const tempForm = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  const initialState = {
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    min_life_span: "",
    max_life_span: "",
    temperaments: [],
    image: "",
  };

  const [create, setCreate] = useState(false);
  const [errors, setErrors] = useState({ form: "complete form" });
  const [completed, setCompleted] = useState(initialState);

  const finalForm = {
    name: completed.name,
    min_height: completed.min_height,
    max_height: completed.max_height,
    min_weight: completed.max_weight,
    max_weight: completed.min_weight,
    min_life_span: completed.min_life_span,
    max_life_span: completed.max_life_span,
    image: completed.image,
    temperaments: completed.temperaments,
  };

  const handleChange = (e) => {
    setCompleted({ ...completed, [e.target.name]: e.target.value });
    setErrors(
      validate({
        ...completed,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleTemperaments = (e) => {
    if (
      e.target.value !== "default" &&
      !completed.temperaments.includes(e.target.value)
    ) {
      setCompleted({
        ...completed,
        temperaments: [...completed.temperaments, e.target.value],
      });
    }
  };

  const validate = (completed) => {
    let errors = {};
    if (!completed.name) {
      errors.name = "Dog Name is required";
    }
    if (!completed.min_height || !completed.max_height) {
      errors.height = "Dog height is required";
    }
    if (parseInt(completed.max_height) <= parseInt(completed.min_height)) {
      errors.height = "Height-max must be highter than height-min";
    }
    if (!completed.min_weight || !completed.max_weight) {
      errors.weight = "Dog height is required";
    }
    if (parseInt(completed.max_weight) <= parseInt(completed.min_weight)) {
      errors.weight = "Weight-max must be highter than height-min";
    }
    if (!completed.min_life_span || !completed.max_life_span) {
      errors.life_span = "Dog life span is required";
    }
    if (
      parseInt(completed.max_life_span) <= parseInt(completed.min_life_span)
    ) {
      errors.life_span = "Life span-max must be highter than life span-min";
    }
    if (completed.temperaments.length === 0) {
      errors.temperaments = "Temperaments are required";
    }
    if (completed.max_life_span < 0 || completed.min_life_span < 0) {
      errors.life_span = "Value must be highter than 0";
    }
    if (completed.max_weight < 0 || completed.min_weight < 0) {
      errors.weight = "Value must be highter than 0";
    }
    if (completed.max_height < 0 || completed.min_height < 0) {
      errors.height = "Value must be highter than 0";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(
      validate({
        ...completed,
        [e.target.name]: e.target.value,
      })
    );
    if (Object.values(errors).length === 0) {
      dispatch(createNewDog(finalForm));
      setCreate(!create);
      setCompleted(initialState);
    }
  };

  const handleDelete = (name) => {
    setCompleted({
      ...completed,
      temperaments: completed.temperaments.filter((item) => item !== name),
    });
  };

  console.log(finalForm.temperaments);

  return (
    <div>
      <Nav />

      <section>
        <p>Crear Perro</p>

        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label>Raza:</label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Nombre.."
            value={completed.name}
            onChange={handleChange}
          />
          {errors.name ? <label className="errors">{errors.name}</label> : null}
          <br />
          <label>Altura:</label>
          <div>
            <input
              type="Number"
              min="1"
              name="min_height"
              className="number"
              placeholder="Minima.."
              value={completed.min_height}
              onChange={handleChange}
            />
            <input
              type="Number"
              min="1"
              name="max_height"
              className="number"
              placeholder="Maxima.."
              value={completed.max_height}
              onChange={handleChange}
            />
          </div>
          {errors.height ? (
            <label className="errors">{errors.height}</label>
          ) : null}{" "}
          <br />
          <label>Peso:</label>
          <div>
            <input
              type="Number"
              name="min_weight"
              min="1"
              className="number"
              placeholder="Minimo.."
              value={completed.min_weight}
              onChange={handleChange}
            />
            <input
              className="number"
              type="Number"
              min="1"
              name="max_weight"
              placeholder="Maximo.."
              value={completed.max_weight}
              onChange={handleChange}
            />
          </div>
          {errors.weight ? (
            <label className="errors">{errors.weight}</label>
          ) : null}{" "}
          <br />
          <label>Años de Vida:</label>
          <div>
            <input
              className="number"
              type="Number"
              min="1"
              name="min_life_span"
              placeholder="Minimo.."
              value={completed.min_life_span}
              onChange={handleChange}
            />
            <input
              name="max_life_span"
              type="Number"
              min="1"
              placeholder="Maximo.."
              value={completed.max_life_span}
              onChange={handleChange}
            />
          </div>
          {errors.life_span ? (
            <label className="errors">{errors.life_span}</label>
          ) : null}{" "}
          <br />
          <label>Imagen (url):</label>
          <input
            name="image"
            type="text"
            placeholder="URL.."
            autoComplete="off"
            value={completed.image}
            onChange={handleChange}
          />
          <br />
          <label>Temperaments:</label>
          <select
            name="temperaments"
            onChange={handleTemperaments}
            value={completed.temperaments}
          >
            <option value="default">Choose</option>
            {Array.isArray(tempForm)
              ? tempForm.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))
              : null}
          </select>{" "}
          {errors.temperaments ? (
            <label className="errors">{errors.temperaments}</label>
          ) : null}
          <div>
            {completed.temperaments?.map((item) => (
              <div key={item}>
                {item} <button onClick={() => handleDelete(item)}>x</button>
              </div>
            ))}
          </div>
          {!create ? (
            <button className="submitButton" type="submit">
              SUBMIT
            </button>
          ) : (
            <div>
              <h2>Perro creado con éxito</h2>
              <button className="submitButton" onClick={() => setCreate(false)}>
                Create Another Dog
              </button>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

export default Create;
