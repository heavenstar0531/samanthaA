import { fetchUtils } from "react-admin";
import restProvider from 'ra-data-json-server';

const servicesHost = 'https://realestate-in-israel.com';

function createForm(params){
    var formData = new FormData();
    try{
        Object.keys(params.data).forEach(key => {
            if (key === 'images'){
                params.data.images.forEach(img => {
                    try{
                        if (img && Object.keys(img).includes('rawFile')) {
                            formData.append(key, img.rawFile, img.rawFile.name)
                        } else if (Array.isArray(img)){
                            img.forEach(nestedImage => {
                                if (nestedImage && Object.keys(nestedImage).includes('rawFile')){
                                    formData.append(key, nestedImage.rawFile, nestedImage.rawFile.name)
                                } else {
                                    formData.append(key, nestedImage.path)
                                }
                            })
                        } else {
                            formData.append(key, img.path)
                        }
                    } catch (err){
                        console.log(err)
                    }
                })
            }  else if (key === 'video'){
                if (params.data.video && Object.keys(params.data.video).includes('rawFile'))
                    formData.append(key, params.data.video.rawFile, params.data.video.rawFile.name)
                else
                    formData.append(key, JSON.stringify(params.data.video))
            } else {
                formData.append(key, params.data[key]);
            }
        })
    } catch (err) {
        console.log(err)
    }
    return formData
}

const httpClient = (url, options = {}) => {
    options.credentials = 'include'
    return fetchUtils.fetchJson(url, options)
};

const dataProvider = restProvider(servicesHost, httpClient)

const myDataProvider = {
    ...dataProvider,
    create: (resource, params) => {
        let formData = createForm(params)
        
        if (resource !== 'properties' || (!formData.has('images') && !formData.has('video'))) {
            // fallback to the default implementation
            return dataProvider.create(resource, params);
        }

        return httpClient(`${servicesHost}/${resource}`, {
            method: 'POST',
            body: formData,
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }));
    },
    update: (resource, params) => {
        let formData = createForm(params)

        if (resource !== 'properties' || (!formData.has('images') && !formData.has('video'))) {
            // fallback to the default implementation
            return dataProvider.update(resource, params);
        }

        return httpClient(`${servicesHost}/${resource}/${params.data.id}`, {
            method: 'PUT',
            body: formData,
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }));
    }
};

export default myDataProvider;