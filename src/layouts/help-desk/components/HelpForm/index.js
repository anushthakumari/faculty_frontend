import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

const HelpForm = () => {
  const [query, setQuery] = useState("");

  const { t } = useTranslation();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery("");
    toast.success(t("help_desk.form.submit_message"));
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Stack gap={4}>
              <Typography variant="h6" gutterBottom>
                {t("help_desk.form.did_not_find")}
              </Typography>
              <Typography variant="body1">{t("help_desk.form.did_not_find_1")}</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="query"
                  label={t("help_desk.form.tell_us")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  value={query}
                  multiline
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ color: "#fff", marginTop: "20px" }}
                  fullWidth
                >
                  {t("commons.submit")}
                </Button>
              </form>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HelpForm;
