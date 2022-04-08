class Probundle < Formula
  desc "A tool that handles compressing, bundling, and unpacking production node_modules dependencies that you want to store in source control"
  homepage "https://megabyte.space"
  url "https://github.com/megabyte-labs/Probundle/releases/download/v3.10.3/probundle.tar.gz"
  version "3.10.3"
  license "MIT"

  

  def install
    os = OS.kernel_name.downcase
    arch = Hardware::CPU.intel? ? "amd64" : Hardware::CPU.arch.to_s
    bin.install "build/bin/probundle-#{os}_#{arch}" => "probundle"
  done

  test do
    system bin/"probundle", "--version"
  end
end
