import { Avatar, TextField } from "@mui/material";
import "./Profile.css";
import { useState } from "react";
import { Formik, Form, Field, useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import Button from '@mui/material/Button';
import background from "./modern-business-buildings-11681736.jpg";
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


function Profile() {

    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");


    // const fileTypes = ["JPG", "PNG", "GIF"];

    // const handleFile = (_file) => {
    //     setFile(_file);
    //     let url = URL.createObjectURL(_file);
    //     console.log("URL :", url);
    //     setPreview(url);
    // }

    const validationSchema = yup.object({
        firstName: yup
            .string('Enter a Valid Name')
            .required('Name is Required'),
        lastName: yup
            .string('Enter a Valid Name')
            .required('Name is Required'),
        email: yup
            .string('Enter a Valid Name')
            .email('enter a valid email')
            // .isValid('enter a valid email')
            .required('email is Required'),
        newPassword: yup
            .string('Enter Password')
            .required('Password is Required')
            .min(8 , "minimum 8 Character Required")
            .max(12 , "maximum 12 Character Required")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
              ),
        confirmPassword: yup
            .string()
            .label('confirm password')
            .required("this parameter is required")
            .oneOf([yup.ref('newPassword'), null], 'Passwords must be Same'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: 'Super',
            lastName: 'Admin2',
            email: 'abc@example.com',
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("values: ", values);

            // let postImage = file;
            // console.log("picture :", postImage.files[0]);
            // let formData = new FormData();
            // formData.append("myFile", postImage.files[0]);
            // formData.append("text", formik.values.text);
            // axios.post(`${state.baseUrl}/signup`, {

            //     firstName: formik.values.firstName,
            //     lastName: formik.values.lastName,
            //     email: formik.values.email,
            //     password: formik.values.password,


            // })
            //     .then(response => {
            //         let message = response.data.message;
            //         console.log("message: ", message)
            //         console.log("response: ", response.data);
            //         setSuccessOpen(true);
            //         formik.resetForm();

            //     })
            //     .catch(err => {
            //         console.log("error: ", err);
            //         setErrorMessage(err.response.data.message);
            //         setErrorOpen(true);
            //     })
        },
    });



    return (
        <div>

            <div className="pMain">
                <div>
                    <div className="cPicc" style={{ backgroundImage: `url(${background})` }} ></div>
                    <Avatar className="pPicc" src="https://images.squarespace-cdn.com/content/v1/572e050c4d088ea3a8f0ac9d/1572711304319-K2K7Y2PKAW0QVJLQGVW7/Atlanta-Professional-Headshots-1.jpg" />

                </div>
                <div className="details">

                    <div className="mar">
                        <p className="superAdmin1">Super Admin2</p>
                        <p className="superAdmin2">Super Admin</p>
                    </div>

                    <div>
                        <p className="adminEmail1">abc@example.com</p>
                        <p className="adminEmail2">Email</p>
                    </div>

                </div>
            </div>
            <div className="pDetail">

                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <h1 className="pAdmin">Profile</h1>
                    </div>
                    <div className="adminForm">

                        <div>

                            <div>
                                <p className="title">First Name: </p>
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                />
                            </div>
                            <br />
                            <div>
                                <p className="title">Last Name: </p>
                                <TextField
                                    id="lastName"
                                    name="lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />
                            </div>
                            <br />
                            <div>
                                <p className="title">Email: </p>
                                <TextField
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="title">Password: </p>
                                <TextField
                                    id="newPassword"
                                    name="newPassword"
                                    type="password"
                                    value={formik.values.newPassword}
                                    onChange={formik.handleChange}
                                    error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                                    helperText={formik.touched.newPassword && formik.errors.newPassword}
                                />
                            </div>
                            <br />
                            <div>
                                <p className="title">Confirm Password: </p>
                                <TextField
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                />
                            </div>
                            <br />
                            <div>
                                <p className="fileT">Profile Picture: </p>
                                <IconButton color="primary" aria-label="upload picture" sx={{ margin: "0px" , padding: "0px" }} component="label">
                                    <input hidden
                                        accept="image/*"
                                        type="file"
                                        onChange={(e) => {
                                            // setFile(e.currentTarget.files[0]);
                                            // let url = URL.createObjectURL(e.currentTarget.files[0]);
                                            // console.log("URL :", url);
                                            // setPreview(url);
                                            // console.log("File :" , file);

                                            if (e.currentTarget.files) {
                                                formik.setFieldValue(
                                                    "file",
                                                    e.currentTarget.files[0]
                                                );
                                            }
                                        }
                                        }
                                    />
                                    <PhotoCamera sx={{ fontSize: "50px" }} />
                                </IconButton>
                            </div>

                        </div>
                    </div>
                    <div className="buttn">
                        <Button type="submit" sx={{ width: "35%" }} variant="contained"><b>Update</b></Button>
                    </div>
                </form>
            </div>

        </div >
    )
}

export default Profile;