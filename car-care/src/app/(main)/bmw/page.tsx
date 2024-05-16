function Bmw() {
  return (
    <video
      width="fill"
      height="fill"
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      className="bg-none"
    >
      <source src="@/assets/videos/bmwvid.mp4" type="video/mp4" />
    </video>
  );
}

export default Bmw;
