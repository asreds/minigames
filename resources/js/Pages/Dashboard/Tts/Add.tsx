import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import Questions from "./components/questions";

const TTSAdd = ({ auth }) => (
    <AuthenticatedLayout
        auth={auth}
        title="Teka-Teki Singkat"
        breadcrumbTitle="Teka-Teki Singkat"
    >
        <div className="container-fluid py-4">
            <Questions />
        </div>
    </AuthenticatedLayout>
);

export default TTSAdd;
