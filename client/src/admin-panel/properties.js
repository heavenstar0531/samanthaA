import * as React from "react";
import { List, Datagrid, Edit, Create, TextField, EditButton, TextInput, SelectInput, BooleanInput, NumberInput, NumberField, BooleanField, ArrayInput, SimpleFormIterator, ImageInput, ArrayField, SimpleForm, ImageField, SingleFieldList, FileInput, FileField} from 'react-admin';

var sell_rent = [
    {id: 'sell', name: 'Sell'},
    {id: 'rent', name: 'Rent'}
]

const PropertyTitle = ({ record }) => {
    return <span>Property Registration {record ? `"${record.id}"` : ''}</span>;
};

export const PropertyList = (props) => (
    <List title={<PropertyTitle />} {...props}>
        <Datagrid>
            <TextField disabled source="id" />
            <TextField source="action" />
            <BooleanField source="status" />
            <TextField source="free_text_en" multiLine />
            <TextField source="free_text_he" multiLine />
            <NumberField source="rooms"/>
            <NumberField source="bedrooms"/>
            <NumberField source="bathrooms"/>
            <NumberField source="size"/>
            <NumberField source="price" options={{ style: 'currency', currency: 'ILS' }}/>
            <FileField source="video" title="Video"/>
            <ArrayField source="images">
                <SingleFieldList>
                    <ImageField source="path"/>
                </SingleFieldList>
            </ArrayField>
            <EditButton/>
        </Datagrid>
    </List>
);

export const PropertyEdit = (props) => (
    <Edit title={<PropertyTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <SelectInput source="action" choices={sell_rent} defaultValue="sell" label="Sell or Rent"/>
            <BooleanInput source="status" label="Availability" />
            <TextInput source="free_text_en" label="Property Description in English" multiline/>
            <TextInput source="free_text_he" label="Property Description in Hebrew" multiline/>
            <NumberInput source="rooms" label="Number of rooms"/>
            <NumberInput source="bedrooms" label="Number of bedrooms"/>
            <NumberInput source="bathrooms" label="Number of bathrooms"/>
            <NumberInput source="size" label="Size in Square Meter"/>
            <NumberInput source="price" label="Price in ILS"/>
            <FileInput source="video" accept="video/*">
                <FileField/>
            </FileInput>
            <ArrayInput source="images">
                <SimpleFormIterator>
                    <ImageInput label="Related Images" accept="image/*" placeholder={<p>Drop your file here</p>}>
                        <ImageField source="path"/>
                    </ImageInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const PropertyCreate = (props) => (
    <Create title="Create a Property" {...props}>
        <SimpleForm>
            <SelectInput source="action" choices={sell_rent} defaultValue="sell" label="Sell or Rent"/>
            <TextInput source="free_text_en" label="Property Description in English" multiline/>
            <TextInput source="free_text_he" label="Property Description in Hebrew" multiline/>
            <NumberInput source="rooms" label="Number of rooms"/>
            <NumberInput source="bedrooms" label="Number of bedrooms"/>
            <NumberInput source="bathrooms" label="Number of bathrooms"/>
            <NumberInput source="size" label="Size in Square Meter"/>
            <NumberInput source="price" label="Price in ILS"/>
            <FileInput source="video" accept="video/*">
                <FileField/>
            </FileInput>
            <ArrayInput source="images">
                <SimpleFormIterator>
                    <ImageInput label="Related Images" multiple={true} accept="image/*" placeholder={<p>Drop your file here</p>}>
                        <ImageField source="path"/>
                    </ImageInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);