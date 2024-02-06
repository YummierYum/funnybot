import DiscordService from "./services/DiscordServices";
import { useState } from "react";

export const initialFormState = {
  data: {
    name: "",
    email: "",
    message: "",
  },
  error: {},
};

function App() {



  const [formData, setFormData] = useState(initialFormState);

  const setDynamicFormData = (name, value) => {
    setFormData({
      data: {
        ...formData.data,
        [name]: value,
      },
      error: {},
    });
  }

  const { Send } = DiscordService(setFormData);

  const PostToDiscord = () => {
    const description = Object.entries(formData.data).map((d) => `${d[0]}: ${d[1]}`).join("\n");
    Send(description);


  };

  return (
    <div className="bg-light">
      <nav className="fixed-top p-2 bg-primary text-white">
        React Contact Name
      </nav>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="card p-5">
          <form onSubmit={(e) => {
            e.preventDefault();
            PostToDiscord();
          }}>
            <div className="form-group">
              <label for="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" className="form-control form-control-sm" name="name" value={formData.data.name} onChange={(e) => {
                const { name, value } = e.target;
                setDynamicFormData(name, value);
              }}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input type="email" name="email" value={formData.data.email} className="form-control form-control-sm" onChange={(e) => {
                const { name, value } = e.target;
                setDynamicFormData(name, value);
              }} />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1" className="form-label">Message</label>
              <textarea className="form-control form-control-sm" cols="40" rows="5" name="message" value={formData.data.message} onChange={(e) => {
                const { name, value } = e.target;
                setDynamicFormData(name, value);
              }} />
            </div>
            <button type="submit" className="btn btn-primary btn-primary-sm">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
