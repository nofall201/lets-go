// resources/js/components/TransportSearchInterface.jsx

import React, { useState } from 'react';
import { Search, Navigation, Menu } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from './components/ui/Tabs';
import { Input }from './components/ui/Input';
import { Button } from './components/ui/Button';

export default function TransportSearchInterface() {
    const [searchInput, setSearchInput] = useState('');

    return (
        <div className="h-screen flex flex-col">
            {/* Header */}
            <header className="bg-orange-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Menu className="w-6 h-6" />
                    <h1 className="text-xl font-bold">LetsGo</h1>
                </div>
                <button className="text-sm">ID</button>
            </header>
            
            {/* Navigation Tabs */}
            <Tabs defaultValue="direction" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="direction">ARAH</TabsTrigger>
                    <TabsTrigger value="route">JALUR</TabsTrigger>
                    <TabsTrigger value="alert">PERINGATAN</TabsTrigger>
                </TabsList>
            </Tabs>
            
            {/* Search Form */}
            <div className="p-4 space-y-4">
                <div className="relative">
                    <Input
                        placeholder="Cari lokasi awal"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="pl-10 pr-10"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    {searchInput && (
                        <button 
                            onClick={() => setSearchInput('')}
                            className="absolute right-3 top-2.5 text-gray-400"
                        >
                            ×
                        </button>
                    )}
                </div>
                
                <Input placeholder="Pilih tujuan" className="pl-10" />
                
                <Button 
                    variant="ghost" 
                    className="w-full flex items-center justify-start text-blue-600"
                >
                    <Navigation className="mr-2 h-5 w-5" />
                    Dari lokasi sekarang
                </Button>
            </div>
            
            <div className="p-4 text-sm text-gray-600">
                Tambahkan lokasi asal dan tujuan untuk mendapatkan daftar rute yang disarankan di antaranya
            </div>
        </div>
    );
}
