import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import type { IInputFormProfail } from "../../Interface/InterfacesFormProfail";
import { FormProfailSchema } from "../../Schema/FormProfailSchema";


export default function LeftContent() {
  // const TextField = styled(TextField)({
  //   direction: "rtl",
  //   "& label": {
  //     right: 0,
  //     left: "auto",
  //     transformOrigin: "top right",
  //   },
  //   "& input": {
  //     textAlign: "right",
  //   },

  // });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputFormProfail>({
    resolver: yupResolver(FormProfailSchema)
  })
  const onSubmit: SubmitHandler<IInputFormProfail> = (data) => {

  }

  return (
    <div className="border-gray-400 text-gray-900 border rounded-2xl pt-8 pb-12 pr-12 pl-12 sm:w-200 sm:h-[711px]">
      <CssBaseline />
      <Box className="flex  flex-col gap-10" component={"form"} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              id="firstname"
              label="نام"
              type="text"
              className="text-start"
              variant="standard"
              autoComplete="off"
              fullWidth
              error={Boolean(errors.firstname)}
              helperText={errors.firstname?.message}
              {...register("firstname")}
              InputLabelProps={{
                style: {
                  right: 0,
                  left: "auto",
                  transformOrigin: "top right",
                },
              }}
              InputProps={{
                style: {
                  textAlign: "right",
                },
              }}
              sx={{
                direction: "rtl",
              }}


            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="lastname"
              label="نام خانوادگی"
              type="text"
              variant="standard"
              autoComplete="off"
              fullWidth
              error={Boolean(errors.lastname)}
              helperText={errors.lastname?.message}
              {...register("lastname")}
              InputLabelProps={{
                style: {
                  right: 0,
                  left: "auto",
                  transformOrigin: "top right",
                },
              }}
              InputProps={{
                style: {
                  textAlign: "right",
                },
              }}
              sx={{
                direction: "rtl",
              }}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="nationalcod"
              label="کد ملی"
              type="text"
              variant="standard"
              autoComplete="off"
              fullWidth
              error={Boolean(errors.nationalcode)}
              helperText={errors.nationalcode?.message}
              {...register("nationalcode")}
              InputLabelProps={{
                style: {
                  right: 0,
                  left: "auto",
                  transformOrigin: "top right",
                },
              }}
              InputProps={{
                style: {
                  textAlign: "right",
                },
              }}
              sx={{
                direction: "rtl",
              }}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="yearofbirth"
              label="سال تولد"
              type="text"
              variant="standard"
              autoComplete="off"
              fullWidth
              error={Boolean(errors.yearofbirth)}
              helperText={errors.yearofbirth?.message}
              {...register("yearofbirth")}
              InputLabelProps={{
                style: {
                  right: 0,
                  left: "auto",
                  transformOrigin: "top right",
                },
              }}
              InputProps={{
                style: {
                  textAlign: "right",
                },
              }}
              sx={{
                direction: "rtl",
              }}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="gender"
              label="جنسیت"
              type="text"
              variant="standard"
              autoComplete="off"
              fullWidth
              error={Boolean(errors.gender)}
              helperText={errors.gender?.message}
              {...register("gender")}
              InputLabelProps={{
                style: {
                  right: 0,
                  left: "auto",
                  transformOrigin: "top right",
                },
              }}
              InputProps={{
                style: {
                  textAlign: "right",
                },
              }}
              sx={{
                direction: "rtl",
              }}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="city"
              label="شهر"
              type="text"
              variant="standard"
              autoComplete="off"
              fullWidth
              error={Boolean(errors.city)}
              helperText={errors.city?.message}
              {...register("city")}
              InputLabelProps={{
                style: {
                  right: 0,
                  left: "auto",
                  transformOrigin: "top right",
                },
              }}
              InputProps={{
                style: {
                  textAlign: "right",
                },
              }}
              sx={{
                direction: "rtl",
              }}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="phonenumber"
              label="شماره موبایل"
              type="text"
              variant="standard"
              autoComplete="off"
              fullWidth
              error={Boolean(errors.phonenumber)}
              helperText={errors.phonenumber?.message}
              {...register("phonenumber")}
              InputLabelProps={{
                style: {
                  right: 0,
                  left: "auto",
                  transformOrigin: "top right",
                },
              }}
              InputProps={{
                style: {
                  textAlign: "right",
                },
              }}
              sx={{
                direction: "rtl",
              }}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="email"
              label="ایمیل"
              type="text"
              variant="standard"
              autoComplete="off"
              fullWidth
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...register("email")}
              InputLabelProps={{
                style: {
                  right: 0,
                  left: "auto",
                  transformOrigin: "top right",
                },
              }}
              InputProps={{
                style: {
                  textAlign: "right",
                },
              }}
              sx={{
                direction: "rtl",
              }}
            />
          </Grid>
        </Grid>
        <div className="flex justify-end" >
          <Button type="submit" className="w-36 h-12 text-xxs rounded-md " variant="contained">ویرایش اطلاعات</Button>
        </div>
      </Box>
    </div>
  );
}
