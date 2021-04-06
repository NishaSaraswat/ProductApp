import React from "react";

function Form({ handleChange, item }) {
  return (
    <div>
      <form>
        <label>Title:</label> <br />
        <input
          type="text"
          name="title"
          value={item.title || ""}
          onChange={handleChange}
        ></input>
        <br /> <br />
        <label>Price:</label> <br />
        <input
          type="text"
          name="price"
          value={item.price || ""}
          onChange={handleChange}
        ></input>
        <br /> <br />
        <label>Stock:</label> <br />
        <input
          type="text"
          name="stock"
          value={item.stock || ""}
          onChange={handleChange}
        ></input>
        <br /> <br />
        <label>Picture</label>
        <br />
        <input
          type="text"
          name="image"
          value={item.image || ""}
          onChange={handleChange}
        ></input>
        <br />
        <br />
        <label>Description</label> <br />
        <textarea
          name="description"
          value={item.description || ""}
          rows="10"
          cols="30"
          onChange={handleChange}
        ></textarea>
        <br />
        <br />
        <select
          name="category"
          value={item.category || ""}
          onChange={handleChange}
        >
          <option value="kids">Kids</option>
          <option value="women">Women</option>
          <option value="sports">Sports</option>
          <option value="men">Men</option>
        </select>
        <br />
        <br />
      </form>
    </div>
  );
}
export default Form;
