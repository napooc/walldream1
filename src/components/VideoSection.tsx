import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Projet Créatif 1",
    videoUrl: "/videos/video-1.mp4",
  },
  {
    id: 2,
    title: "Projet Créatif 2",
    videoUrl: "/videos/video-2.mp4",
  },
  {
    id: 3,
    title: "Projet Créatif 3",
    videoUrl: "/videos/video-3.mp4",
  },
];

export const VideoSection = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section id="videos" className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Video className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">Découvrez nos créations</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Nos Vidéos
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Découvrez nos projets en vidéo et laissez-vous inspirer
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-elegant bg-card"
              >
                {playingVideo === video.id ? (
                  <div className="aspect-video relative bg-background">
                    <video
                      src={video.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                      onEnded={() => setPlayingVideo(null)}
                    />
                  </div>
                ) : (
                  <div 
                    className="aspect-video relative cursor-pointer group"
                    onClick={() => setPlayingVideo(video.id)}
                  >
                    <video
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Play button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="absolute inset-0 bg-accent rounded-full blur-xl opacity-50"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                        <div className="relative w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-glow">
                          <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Video title */}
                <motion.div
                  className="p-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-accent">
                    <span className="text-sm font-semibold">
                      {playingVideo === video.id ? "En lecture" : "Cliquez pour regarder"}
                    </span>
                    {playingVideo !== video.id && (
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative border */}
              <div className="absolute -inset-0.5 bg-gradient-accent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity -z-10 blur" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
