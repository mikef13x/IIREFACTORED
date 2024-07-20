import React, { useState } from 'react';

export default function UploadSection() {
    const [formData, setFormData] = useState({
        gameTitle: '',
        releaseDate: '',
        gameDescription: '',
        mainImage: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "mainImage") {
            setFormData(prevState => ({ ...prevState, [name]: files[0] }));
        } else {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., via fetch API or axios
        console.log(formData);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Upload Your Game</h1>
                        <p>if your main photo is not 2:3, it will be cut off on the homepage preview</p>
                    </div>
                </div>
                <div id="main-content-container" className="content-container mt-2">
                    <div className="upload-section mt-4">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="mb-3">
                                <label htmlFor="game-title" className="form-label">Game title:</label>
                                <input type="text" className="form-control" id="game-title" name="gameTitle" required onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="release-date" className="form-label">Estimated Release Date</label>
                                <input type="date" className="form-control" id="release-date" name="releaseDate" required onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="game-description" className="form-label">Game Description</label>
                                <textarea className="form-control" id="game-description" name="gameDescription" placeholder="Game Description" required onChange={handleChange}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFileMain" className="form-label">Select main photo</label>
                                <input className="form-control form-control-sm" id="formFileMain" name="mainImage" type="file" onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}