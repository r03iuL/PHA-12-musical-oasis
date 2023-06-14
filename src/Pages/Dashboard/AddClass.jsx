import useAxiosSecure from './../../Hook/useAxiosSecure';

import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
function AddClass() {

    const [axiosSecure] = useAxiosSecure();
    // 
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {insName,student, price, activity} = data;
                const newItem = {insName, price: parseFloat(price),student:parseFloat(student), activity, image:imgURL}
                console.log(newItem)
                axiosSecure.post('/populer', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    console.log("hello",img_hosting_token);
    
    return (
        <div className="w-full px-10">
            <div className='p-5 text-center font-bold text-3xl border-b-4 border-indigo-500'>Add Classes</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor name</span>
                    </label>
                    <input type="text" placeholder="Instructor Name"
                        {...register("insName", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Activity*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("activity", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Flute</option>
                            <option>Piano</option>
                            <option>Violin</option>
                            <option>Drums</option>
                            <option>Saxophone</option>
                            <option>Guitar</option>
                            <option>Trumpet</option>
                            <option>Harp</option>
                            <option>Clarinet</option>
                            <option>Cello</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Student</span>
                    </label>
                    <textarea {...register("student", { required: true })} className="input input-bordered w-full " placeholder="student number"></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4 p-3" type="submit" value="Add" />
            </form>
        </div>
    );
}

export default AddClass;