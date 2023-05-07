import React from "react";
import styles from "./EditProfile.module.sass";
import Layout from "../../components/Layout";
import EditProfileForm from "../../components/EditProfileForm";

const EditProfile = () => {
  return (
    <>
      <Layout>
        <EditProfileForm />
      </Layout>
    </>
  );
};

export default EditProfile;
