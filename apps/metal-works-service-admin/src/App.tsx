import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { HeatTreatmentList } from "./heatTreatment/HeatTreatmentList";
import { HeatTreatmentCreate } from "./heatTreatment/HeatTreatmentCreate";
import { HeatTreatmentEdit } from "./heatTreatment/HeatTreatmentEdit";
import { HeatTreatmentShow } from "./heatTreatment/HeatTreatmentShow";
import { MetalworkingList } from "./metalworking/MetalworkingList";
import { MetalworkingCreate } from "./metalworking/MetalworkingCreate";
import { MetalworkingEdit } from "./metalworking/MetalworkingEdit";
import { MetalworkingShow } from "./metalworking/MetalworkingShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { FileUploadList } from "./fileUpload/FileUploadList";
import { FileUploadCreate } from "./fileUpload/FileUploadCreate";
import { FileUploadEdit } from "./fileUpload/FileUploadEdit";
import { FileUploadShow } from "./fileUpload/FileUploadShow";
import { ConsultationList } from "./consultation/ConsultationList";
import { ConsultationCreate } from "./consultation/ConsultationCreate";
import { ConsultationEdit } from "./consultation/ConsultationEdit";
import { ConsultationShow } from "./consultation/ConsultationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MetalWorksService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="HeatTreatment"
          list={HeatTreatmentList}
          edit={HeatTreatmentEdit}
          create={HeatTreatmentCreate}
          show={HeatTreatmentShow}
        />
        <Resource
          name="Metalworking"
          list={MetalworkingList}
          edit={MetalworkingEdit}
          create={MetalworkingCreate}
          show={MetalworkingShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="FileUpload"
          list={FileUploadList}
          edit={FileUploadEdit}
          create={FileUploadCreate}
          show={FileUploadShow}
        />
        <Resource
          name="Consultation"
          list={ConsultationList}
          edit={ConsultationEdit}
          create={ConsultationCreate}
          show={ConsultationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
