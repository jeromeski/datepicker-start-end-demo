import { Field, Form, Formik } from "formik";
import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const initialValues = {
  start: "",
  end: ""
};

export default function App() {
  const today = new Date();
  const days = 1;
  // Date.now() gives the epoch date value (in milliseconds) of current date
  const nextDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  const handleSubmit = () => {
    //
  };
  return (
    <div className="App p-5">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => {
          return (
            <Form>
              <Field name="start">
                {({ form, field, meta }) => {
                  console.log(field.value);
                  console.log(form);
                  const handleStartDateChange = (date) => {
                    form.setFieldValue("start", date);
                  };
                  return (
                    <div className="form-group p-4">
                      <DatePicker
                        selected={field.value}
                        onChange={handleStartDateChange}
                        minDate={today}
                        // todayButton={"Today"}
                        // showTimeSelect
                        // startDate={rangeStart}
                        dateFormat="MMMM dd yyyy"
                        placeholderText="Select Start"
                      />
                    </div>
                  );
                }}
              </Field>
              <div className="form-group p-4">
                <Field name="end">
                  {({ form, field, meta }) => {
                    console.log(field.value);
                    console.log(form);
                    const handleEndDateChange = (date) => {
                      form.setFieldValue("end", date);
                    };
                    return (
                      <DatePicker
                        selected={field.value}
                        onChange={handleEndDateChange}
                        minDate={nextDate}
                        // todayButton={"Today"}
                        // showTimeSelect
                        // startDate={rangeStart}
                        dateFormat="MMMM dd yyyy"
                        placeholderText="Select End"
                      />
                    );
                  }}
                </Field>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
/*
kopyahan
https://codesandbox.io/s/react-datepicker-example-5cpye?file=/src/index.tsx:482-506

<DatePicker
          selected={field.value}
          onChange={handleStartDateChange}
          minDate={nextDate}
          // todayButton={"Today"}
          // showTimeSelect
          // startDate={rangeStart}
          dateFormat="MMMM dd yyyy"
        />
*/
