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
        fulldescription: string
    }
}


export default function DetailsModal({ data }: DetailsModalProps) {
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

                                <DialogPanel className="max-w-4xl w-full h-auto transform overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-8 text-left shadow-2xl border-2 border-cyan-500/30 backdrop-blur-xl transition-all">
                                    <div className="relative mb-6">
                                        <DialogTitle className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text mb-4 drop-shadow-lg">
                                            {data?.title}
                                        </DialogTitle>
                                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/50" />
                                    </div>
                                    
                                    <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-8">
                                        {data?.fulldescription}
                                    </p>
                                    
                                    {data?.images && data.images.length > 0 && (
                                        <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-2xl mb-6">
                                            <Swiper
                                                navigation
                                                modules={[Navigation]}
                                                spaceBetween={0}
                                                slidesPerView={1}
                                                className="rounded-2xl"
                                            >
                                                {data.images.map((img, idx) => (
                                                    <SwiperSlide key={idx} className="flex items-center justify-center bg-slate-950">
                                                        <div className="flex items-center justify-center min-h-[50vh] md:min-h-[60vh] w-full p-4">
                                                            <img
                                                                src={img}
                                                                alt={`${data?.title ?? "proyecto"} captura ${idx + 1}`}
                                                                className="w-full max-h-[55vh] md:max-h-[65vh] object-contain rounded-xl shadow-2xl"
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <div className="absolute inset-0 pointer-events-none border-2 border-cyan-500/20 rounded-2xl" />
                                        </div>
                                    )}

                                    <button
                                        className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                                        onClick={() => navigate(location.pathname, { replace: true })}
                                    >
                                        ✕ Cerrar
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
