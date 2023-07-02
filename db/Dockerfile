FROM mongo:6-jammy

ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=VRuAd2Nvmp4ELHh5
ENV MONGO_INITDB_DATABASE=ktpm

COPY cachly.json /db/cachly.json
COPY hokhau.json /db/hokhau.json
COPY khaibao.json /db/khaibao.json
COPY nhankhau.json /db/nhankhau.json
COPY user.json /db/user.json
COPY testcovid.json /db/testcovid.json
COPY initDB.sh /db/initDB.sh
# RUN /db/initDB.sh
CMD ["mongod"]
