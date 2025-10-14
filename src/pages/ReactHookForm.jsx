import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const ReactHookForm = () => {
  const form = useForm({
    defaultValues: {
      username: "abc kumar",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
        portfolio: "",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
    },
  });
  let renderCount = 0;
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data) => {
    console.log("Form submitted successfully", data);
  };
  renderCount++;
  return (
    <div>
      <h2>ReactHookForm</h2> <br />
      <h2>Form count : {renderCount}</h2> <br />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          <p className={`error ${errors.username?.message ? "show" : "hide"}`}>
            {errors.username?.message}
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="eamil">Email</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email Id",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter a different email address"
                  );
                },
                notAllowedDomain: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "This domain is not allowed"
                  );
                },
              },
            })}
          />
          <p className={`error ${errors.email?.message ? "show" : "hide"}`}>
            {errors.email?.message}
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel is required",
              },
            })}
          />
          <p className={`error ${errors.channel?.message ? "show" : "hide"}`}>
            {errors.channel?.message}
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter Link</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook Link</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>
        <div className="form-control">
          <label htmlFor="portfolio">Portfolio Link</label>
          <input type="text" id="portfolio" {...register("social.portfolio")} />
        </div>
        <div className="form-control">
          <label htmlFor="primaryPhoneNumber">Primary Phone Number</label>
          <input
            type="text"
            id="primaryPhoneNumber"
            {...register("phoneNumbers.0")}
          />
        </div>
        <div className="form-control">
          <label htmlFor="secondaryPhoneNumber">Secondary Phone Number</label>
          <input
            type="text"
            id="secondaryPhoneNumber"
            {...register("phoneNumbers.1")}
          />
        </div>
        <div>
          <h2>List of numbers</h2>
          <>
            {fields.map((field, index) => (
              <div className="form-control" key={field.id}>
                <input type="text" {...register(`phNumbers.${index}.number`)} />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                )}
              </div>
            ))}
          </>
          <button type="button" onClick={() => append({ number: "" })}>
            Add Number
          </button>
        </div>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ReactHookForm;
