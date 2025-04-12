import { useNavigate } from "react-router";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { AuthInterface } from "./interfaces/Auth";


function AuthComponent(){
    const navigate =useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<AuthInterface>();

      const onSubmit = async (data: AuthInterface) => {
        console.log(data,'data user')
        navigate('/DashBoard')

      };

    return (
        <Box 
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300, mx: "auto", mt: 5 }}
        >
          <Typography variant="h5" align="center">Login</Typography>
    
          <TextField
            label="E-mail"
            type="email"
            {...register("email", { required: "E-mail é obrigatório" })}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />
    
          <TextField
            label="Senha"
            type="password"
            {...register("password", { required: "Senha é obrigatória" })}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />
    
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Entrar
          </Button>
        </Box>
      );
}
export default AuthComponent;