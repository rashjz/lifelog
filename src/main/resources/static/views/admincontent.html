<div th:fragment="admincontent">


    <script type="text/ng-template" id="modal.html">
        <div class="modal-header">
            <h3 class="modal-title">Confirmation</h3>
        </div>
        <div class="modal-body">
            Are you sure to Delete ?
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" ng-click="ok()">OK</button>
            <button class="btn btn-danger" ng-click="cancel()">Cancel</button>
        </div>
    </script>


    <div style="font-weight: bold;" class="container">
        <div ng-controller="ContentController" style="margin-top: 6%;">


            <div class="row">
                <div class="col-xs-6">


                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <span class="panel-title">Content Edit</span>
                        </div>

                        <div class="panel-body">

                            <div class="col-sm-9">
                                <div class="form-group"> <!-- Date input -->
                                    <label class="control-label" for="date">Date</label>
                                    <input class="form-control" id="date" name="date" placeholder="YYYY/MM/DD"
                                           ng-model="content.insertDate" type="text"/>
                                </div>
                            </div>

                            <div class="col-sm-9">
                                <label class="control-label" for="title">Title</label>
                                <input type="text" class="form-control" name="title" id="title" placeholder="Title"
                                       ng-model="content.title"/>
                            </div>
                            <div class="col-sm-9">
                                <label class="control-label" for="desc">Description</label>
                                <textarea type="text" class="form-control" name="desc" id="desc"
                                          ng-model="content.description"/>
                            </div>
                            <div class="col-sm-9">
                                <label class="control-label" for="author">Author</label>
                                <input type="text" id="author" name="author" class="form-control" placeholder="Author"
                                       ng-model="content.author"/>
                            </div>
                            <div class="col-sm-9">
                                <label class="control-label" for="types">Type</label>
                                <select class="form-control" id="types"
                                        ng-options="o.name for o in contentTypes track by o.id"
                                        ng-model="content.contentType">
                                </select>
                            </div>
                            <div class="col-sm-9">
                                <label class="control-label" for="status">Status</label>
                                <input type="text" class="form-control" id="status" placeholder="Status"
                                       ng-model="content.status"/>
                            </div>

                            <div style="margin-top: 5px;" class="col-sm-9">
                                <button ng-click="newContent()" class="btn btn-primary">New</button>
                                <button ng-click="editContent()" class="btn btn-success">Save</button>
                                <button ng-click="deleteContent()" class="btn btn-danger">Delete</button>

                            </div>

                        </div>


                    </div>


                </div>

                <div class="col-xs-6">
                    <div style="margin-top: 2px;" class="panel panel-primary">
                        <div class="panel-heading">
                            <span class="panel-title">Content Edit</span>
                        </div>
                        <div class="panel-body">
                            <img class="img-responsive img-box img-thumbnail"
                             ng-src="{{content.imagePath == null ? 'images/emtyimage.png' : content.imagePath}}"/>

                            <label  class="btn btn-default btn-file">
                                Browse <input ng-file-select="onFileSelect($files)" style="display: none;" type="file" />
                            </label>

                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-top: 10px;" class="row">

                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <!--<span class="panel-title">Content List</span>-->
                        <div style="width: 25%;margin-left: 20px;" class="input-group">
                            <input class="form-control" ng-model="searchTerm" ng-change="change(text)"
                                   placeholder="Search by Title"
                                   type="search"/>
                            <span class="input-group-addon"><span class="glyphicon glyphicon-search"></span></span>
                        </div>
                    </div>
                    <div class="panel-body">
                        <table class="table">
                            <thead>
                            <tr style="color: darkgreen;">
                                <th>#</th>
                                <th>TITLE</th>
                                <th>ISERT DATE</th>
                                <th>AUTHOR</th>
                                <th>CONTENT TYPE</th>
                                <th>STATUS</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr style="cursor:pointer;" ng-repeat="post in posts" ng-click="selectRow(post)">
                                <td>{{post.id}}</td>
                                <td>{{post.title}}</td>
                                <td>{{ post.insertDate | date:'MM/dd/yyyy' }}</td>
                                <td>{{post.author}}</td>
                                <td>{{post.contentType.name}}</td>
                                <td>
                                    <font ng-if="post.status=='a'"
                                          style="color: green;font-weight: bold;">Active</font>
                                    <font ng-if="post.status=='d'"
                                          style="color: red;font-weight: bold;">Deactive</font>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <ul uib-pagination total-items="totalItems"
                            ng-model="currentPage" items-per-page="itemsPerPage"
                            max-size="7" rotate="false" previous-text="&lsaquo;" next-text="&rsaquo;"
                            first-text="&laquo;" last-text="&raquo;"></ul>

                    </div>
                </div>


            </div>

        </div>
    </div>


    <script type="text/javascript">
        $(function () {
            $("#date").datepicker({
                format: 'yyyy-mm-dd',
                autoclose: true,
                todayBtn: false,
                startDate: "01/01/2016"
            });
        });
    </script>
    <script type="text/javascript" src="../js/FileUpload.js"></script>
    <script type="text/javascript" src="../js/ModalController.js"></script>
    <script type="text/javascript" src="../js/ContentService.js"></script>
    <script type="text/javascript" src="../js/ContentController.js"></script>

</div>

