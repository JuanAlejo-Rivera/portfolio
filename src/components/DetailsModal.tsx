import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

type DetailsModalProps = {
    data?: {
        title: string
        description: string
        images: string[]
    }
}


export default function DetailsModal({ data }: DetailsModalProps) {
    // console.log(data?.images)
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const modalTask = queryParams.get("details");
    const show = modalTask ? true : false;



    return (
        <>
            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => navigate(location.pathname, { replace: true })}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >

                                <DialogPanel className="max-w-2xl h-auto transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left shadow-xl transition-all">
                                    <DialogTitle className="text-xl text-slate-200 font-thin mb-4">
                                        {data?.title} 🚀
                                    </DialogTitle>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {data?.description}
                                    </p>
                                    {/* Carrusel Swiper */}
                                    {data?.images && data.images.length > 0 && (
                                        <Swiper
                                            navigation
                                            modules={[Navigation]}
                                            spaceBetween={10}
                                            slidesPerView={1}
                                            className="rounded-xl overflow-hidden"
                                        >
                                            
                                            {data.images.map((img, idx) => (

                                                <SwiperSlide key={idx} className="flex items-center justify-center">
                                                    <div className="flex items-center justify-center h-[70vh] w-full">
                                                        <img
                                                            src={img}
                                                            alt={`${data?.title ?? "proyecto"} screenshot ${idx + 1}`}
                                                            className="w-full max-h-[60vh] lg:max-h-[70vh] object-contain rounded-xl"
                                                        />
                                                    </div>
                                                </SwiperSlide>



                                            ))}
                                        </Swiper>
                                    )}

                                    <button
                                        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
                                        onClick={() => navigate(location.pathname, { replace: true })}
                                    >
                                        Cerrar
                                    </button>
                                </DialogPanel>

                            </TransitionChild>
                        </div>
                    </div>

                </Dialog>
            </Transition>

        </>
    )
}
