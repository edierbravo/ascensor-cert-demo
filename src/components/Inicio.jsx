import {Input, Button} from "@heroui/react";
import image from "../assets/404.jpg";
import { useState } from "react";
import { useEffect } from "react";
import * as React from "react";


export const Inicio = ({ userSelected, handlerCloseForm }) => {

  

    // const { initialUserForm, handlerAddUser, errors } = useUsers();

    const [userForm, setUserForm] = useState({id: 0, username: '', password: '', email: '', admin: false});
    const [checked, setChecked] = useState(false);
    const { id, username, password, email, admin } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        })
    }, [userSelected])

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setUserForm(
            {
                ...userForm,
                [name]: value
            }
        )
    }

    const onCheckboxChange = () => {
        setChecked(!checked);
        setUserForm({
            ...userForm,
            admin: checked,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault(); // permite que no se recargue la pagina cundo se envia el formulario


        // handlerAddUser(userForm) // Guardar el userFrom en userList


    }

    const onCloseForm = () => {
        handlerCloseForm();
        // setUserForm(initialUserForm);
    }
        const colors = ["default", "primary", "secondary", "success", "warning", "danger"];
        const variants = ["flat", "bordered", "underlined", "faded"];


    return (
        <>

        <Input
                        isReadOnly
                        className=""
                        defaultValue="junior@heroui.com"
                        label="Email"
                        type="email"
                        variant="bordered"
                      />

         <div className="w-full flex flex-row flex-wrap gap-5 m-4">
      {colors.map((color) => (
        <Input
          key={color}
          className="max-w-[300px]"
          color={color}
          defaultValue="junior@heroui.com"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
      ))}
    </div>

          
        </>
    )
}