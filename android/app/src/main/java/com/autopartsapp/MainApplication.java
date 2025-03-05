import com.facebook.react.PackageList;
import com.oblador.vectoricons.VectorIconsPackage;

@Override
protected List<ReactPackage> getPackages() {
  @SuppressWarnings("UnnecessaryLocalVariable")
  List<ReactPackage> packages = new PackageList(this).getPackages();
  packages.add(new VectorIconsPackage());
  return packages;
} 