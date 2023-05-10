// import axios from "axios";
import { Formik, Form, Field, useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import MessageIcon from '@mui/icons-material/Message';

// import { PhoneInput } from "react-contact-number-input";
// import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css'

import { useState, useMemo } from "react";
// import Select from 'react-select'
// import countryList from 'react-select-country-list'
import "./Signup.css";

function Signup() {
    const [value, setValue] = useState()
    // const [value, setValue] = useState('')

    const [successOpen, setSuccessOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [passVisi, setPassVisi] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [clicked, setClicked] = useState(false);

    // const options = useMemo(() => countryList().getData(), [])

    // const changeHandler = value => {
    //     setValue(value)
    // }


    let handleClose = () => {
        setSuccessOpen(false);
        setErrorOpen(false);
    }

    const validationSchema = yup.object({
        name: yup
            .string('Enter a Valid Name')
            .required('Name is Required'),
        email: yup
            .string('Enter a Valid Name')
            .email('enter a valid email')
            // .isValid('enter a valid email')
            .required('email is Required'),
        phone: yup
            .number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(8)
            .required('A phone number is required'),
        messages: yup
            .string("Parameter Required")
            .required("Parameter Required")
    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            messages: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // setMessage(`Thank you ${values.name} !`);
            // setClicked(true)

            console.log("values: ", values);
            // axios.post('https://admin.hnhweb.dev-um.xyz/api/contact', {

            //     name: formik.values.name,
            //     email: formik.values.email,
            //     phone: formik.values.phone,
            //     message: formik.values.messages,

            // })
            //     .then(response => {
            //         formik.resetForm();
            //         setClicked(false)
            //         setSuccessOpen(true);
            //         let message = response.data.message;
            //         console.log("message: ", message)
            //         console.log("response: ", response.data);
            //         formik.resetForm();

            //     })
            //     .catch(err => {
            //         setClicked(false)
            //         setErrorOpen(true);
            //         console.log("error: ", err);
            //     })
        }
    });

    let passType = (passVisi) ? "text" : "password";

    return (
        <div>

            <form className="form" onSubmit={formik.handleSubmit}>
                <TextField
                    id="name"
                    name="name"
                    label="Name: "
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
                <br />
                <br />
                <TextField
                    id="email"
                    name="email"
                    label="Email: "
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <br />
                <br />

                <TextField
                    id="phone"
                    name="phone"
                    label="Phone: "
                    type="text"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <PhoneIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <br />
                <br />
                {/* <div className="int">
                    <PhoneInput
                        // name="phone"
                        className="cPho"
                        international
                        defaultCountry="PK"
                        value={value}
                        onChange={setValue}
                    />
                </div>
                <br /> */}
                {/* <Select options={options} value={value} onChange={changeHandler} styles={{width: "260px"}} />
                <br />
                <br /> */}
                {/* <TextField
                    // sx={{ width: "260px" }}
                    multiline
                    rows={3}
                    id="messages"
                    name="messages"
                    label="Message: "
                    type="text"
                    value={formik.values.messages}
                    onChange={formik.handleChange}
                    error={formik.touched.messages && Boolean(formik.errors.messages)}
                    helperText={formik.touched.messages && formik.errors.messages}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <MessageIcon />

                            </InputAdornment>
                        ),
                    }}
                // variant="standard"
                />
                <br />
                <br /> */}
                <TextField
                    id="password"
                    name="password"
                    className='ppass'
                    type={passType}
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={
                                    () => { setPassVisi(!passVisi) }
                                }>
                                    {(passVisi) ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    // variant="standard"
                />
                <br />
                <br />
                {
                    (!clicked) ?
                        <Button color="primary" variant="outlined" type="submit">
                            Signup
                        </Button>
                        :
                        <CircularProgress />
                }




            </form>
            <Snackbar open={successOpen} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            <Snackbar open={errorOpen} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Request Failed;
                </Alert>
            </Snackbar>

        </div>
    )

}
export default Signup;