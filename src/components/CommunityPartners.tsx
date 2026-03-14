import { Section } from './Section';

const dummyBoxes = Array.from({ length: 6 }, (_, i) => i);

export function CommunityPartners() {
    return (
        <Section id="community" title="Community & Media Partner">
            <div className="relative">
                <div className="select-none pointer-events-none" style={{ filter: 'blur(20px)' }}>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                            {dummyBoxes.map((index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm"
                                    style={{ border: "1px solid #383838", width: '220px' }}
                                >
                                    <div className="w-full h-32 bg-gray-600 rounded-t-xl" />
                                    <div className="text-center mt-4">
                                        <h3 className="font-bold text-white mb-1">Partner Name</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
