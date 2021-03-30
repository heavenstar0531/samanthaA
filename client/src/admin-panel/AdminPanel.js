// in app.js
import * as React from "react";
import { Admin, Resource } from 'react-admin'
import dataProvider from './DataProvider'
import authProvider from './AuthProvider'
import { PropertyList, PropertyEdit, PropertyCreate } from './properties';

function AdminPanel(){
    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
            <Resource name="properties" list={PropertyList} edit={PropertyEdit} create={PropertyCreate} />
        </Admin>
    )
}

export default AdminPanel